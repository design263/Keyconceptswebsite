import { ContactLead } from "../models/ContactLead.js";
import { LeadAssignee } from "../models/LeadAssignee.js";
import { paginatedResponse } from "../utils/apiResponse.js";
import sendEmail from "../../sendEmail.js";
import fs from "fs";
import path from "path";

const normalizeLead = (leadDoc) => {
  const lead = leadDoc?.toObject ? leadDoc.toObject() : { ...leadDoc };
  const lines = (lead.message || "").split("\n");

  if (!lead.company) {
    lead.company =
      lines.find((l) => l.startsWith("Company:"))?.replace("Company:", "").trim() || "";
  }
  const rawPhoneDigits = (lead.phone || "").replace(/\D/g, "");
  if (!lead.phone || rawPhoneDigits.length < 5) {
    const extracted = lines.find((l) => l.startsWith("Phone:"))?.replace("Phone:", "").trim() || "";
    if (extracted.replace(/\D/g, "").length >= 5) {
      lead.phone = extracted;
    } else {
      lead.phone = "";
    }
  }
  if (!lead.approximateBudget) {
    lead.approximateBudget =
      lines.find((l) => l.startsWith("Approximate Budget:"))?.replace("Approximate Budget:", "").trim() || "";
  }
  return lead;
};

export const createContactLead = async (req, res) => {
  const { name, email, subject, message } = req.body;
  let { phone, company, approximateBudget } = req.body;

  // Fallback extraction from message if not passed directly
  if (!phone || !company || !approximateBudget) {
    const lines = (message || "").split("\n");
    if (!phone) {
      phone = lines.find((l) => l.startsWith("Phone:"))?.replace("Phone:", "").trim() || "";
    }
    if (!company) {
      company = lines.find((l) => l.startsWith("Company:"))?.replace("Company:", "").trim() || "";
    }
    if (!approximateBudget) {
      approximateBudget = lines.find((l) => l.startsWith("Approximate Budget:"))?.replace("Approximate Budget:", "").trim() || "";
    }
  }

  // Sanitize phone: ensure it contains actual digits beyond country code
  let cleanPhone = (phone || "").trim();
  if (cleanPhone.replace(/\D/g, "").length < 5) {
    cleanPhone = "";
  }

  const companyEmail = process.env.COMPANY_EMAIL;

  try {
    const initialActivity = {
      type: "Note",
      title: "Inbound Inquiry Received",
      conversationDetails: `Inquiry received via website contact form. Service requested: ${subject}.`,
      date: new Date(),
      time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }),
      recordedBy: "Website Contact Form",
    };

    const lead = await ContactLead.create({
      ...req.body,
      phone: cleanPhone,
      company: company || "",
      approximateBudget: approximateBudget || req.body.approximateBudget || "",
      status: "New",
      priority: "Medium",
      activities: [initialActivity],
    });

    const configuredEmails = process.env.CONTACT_NOTIFICATION_EMAILS
      ? process.env.CONTACT_NOTIFICATION_EMAILS.split(",").map((e) => e.trim().toLowerCase()).filter(Boolean)
      : [];

    const defaultContactEmails = [
      "support@keyconcepts.co.in",
      "info@keyconcepts.co.in",
      "princep@keyconcepts.co.in",
    ];

    const leadRecipients = Array.from(
      new Set([
        ...defaultContactEmails,
        ...configuredEmails,
        ...(companyEmail ? [companyEmail.trim().toLowerCase()] : []),
      ])
    ).filter(Boolean);

    if (leadRecipients.length === 0) {
      console.warn("No contact notification recipient configured in environment. Admin email won't be sent.");
    }

    // PDF Attachment 
    const pdfFileName = "KC_Profile.pdf";
    const pdfPath = fs.existsSync(path.resolve("backend/src/companyMailPdf", pdfFileName))
      ? path.resolve("backend/src/companyMailPdf", pdfFileName)
      : path.resolve("src/companyMailPdf", pdfFileName);

    const mailAttachments = [];
    if (fs.existsSync(pdfPath)) {
      mailAttachments.push({
        filename: pdfFileName,
        path: pdfPath,
      });
    } else {
      console.warn(`PDF attachment not found at ${pdfPath}. Sending email without attachment.`);
    }

    // 1. Notification Email to Internal Team / Admin
    if (leadRecipients.length > 0) {
      await sendEmail({
        to: leadRecipients.join(", "),
        subject: `New Business Inquiry: ${subject} - ${name}`,
        html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
              <div style="background: linear-gradient(135deg, #f1592a 0%, #ff7a45 100%); padding: 24px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">New Inbound Business Lead</h1>
                <p style="color: rgba(255,255,255,0.95); margin-top: 6px; font-size: 14px;">Subject: ${subject}</p>
              </div>
              
              <div style="padding: 24px 28px; background-color: #ffffff;">
                <h3 style="color: #111827; border-bottom: 2px solid #f1592a; padding-bottom: 4px; display: inline-block; margin: 0 0 16px 0; font-size: 15px; font-weight: 600;">
                  Lead Information
                </h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr>
                    <td style="padding: 6px 0; color: #6b7280; width: 140px;"><strong>Client Name:</strong></td>
                    <td style="padding: 6px 0; color: #111827; font-weight: 600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Email:</strong></td>
                    <td style="padding: 6px 0; color: #111827;"><a href="mailto:${email}" style="color: #f1592a; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Phone:</strong></td>
                    <td style="padding: 6px 0; color: #111827;">${lead.phone && lead.phone.replace(/\D/g, '').length >= 5 ? `<a href="tel:${lead.phone}" style="color: #111827; text-decoration: none;">${lead.phone}</a>` : '—'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Company:</strong></td>
                    <td style="padding: 6px 0; color: #111827;">${lead.company || '—'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Service Requested:</strong></td>
                    <td style="padding: 6px 0; color: #f1592a; font-weight: 600;">${subject}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Approximate Budget:</strong></td>
                    <td style="padding: 6px 0; color: #111827;">${lead.approximateBudget || '—'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Submitted On:</strong></td>
                    <td style="padding: 6px 0; color: #111827;">${new Date(lead.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                  </tr>
                </table>
                
                <div style="margin-top: 20px;">
                  <h4 style="color: #374151; margin: 0 0 8px 0; font-size: 13px; font-weight: 600;">Project Message / Requirements:</h4>
                  <div style="background-color: #f8fafc; padding: 14px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <p style="white-space: pre-wrap; color: #374151; line-height: 1.6; margin: 0; font-size: 13px;">
                      ${message || 'No message provided.'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div style="background-color: #f3f4f6; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                  Open Admin CRM to assign this lead to a team member and track lifecycle stages.
                </p>
              </div>
            </div>
          `,
      });
      console.log("Contact notification email sent successfully to:", leadRecipients.join(", "));
    }

    // 2. Automated Professional Client Welcome & Confirmation Email
    try {
      const formattedSubmissionTime = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      await sendEmail({
        to: email,
        subject: `Inquiry Received: Exploring ${subject} with Key Concepts`,
        html: `
            <div style="font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background-color: #ffffff; color: #1f2937;">
              <!-- Header Banner -->
              <div style="background: linear-gradient(135deg, #111827 0%, #1f2937 100%); padding: 32px 24px; text-align: center; border-bottom: 3px solid #f1592a;">
                <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">Key Concepts</h1>
                <p style="color: #f1592a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 6px 0 0 0;">Business Solutions & Digital Engineering</p>
              </div>
              
              <!-- Main Content -->
              <div style="padding: 32px 28px;">
                <h2 style="font-size: 20px; font-weight: 700; color: #111827; margin: 0 0 12px 0;">
                  Hello ${name},
                </h2>
                <p style="font-size: 15px; color: #4b5563; line-height: 1.6; margin: 0 0 20px 0;">
                  Thank you for reaching out to <strong>Key Concepts</strong>. We have received your inquiry regarding <strong>${subject}</strong> and your project requirements.
                </p>

                <!-- Inquiry Summary Card -->
                <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
                  <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; margin: 0 0 12px 0; font-weight: 700;">
                    Your Inquiry Summary
                  </h3>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr>
                      <td style="padding: 4px 0; color: #6b7280; width: 140px;">Service / Topic:</td>
                      <td style="padding: 4px 0; color: #111827; font-weight: 600;">${subject}</td>
                    </tr>
                    ${company ? `
                    <tr>
                      <td style="padding: 4px 0; color: #6b7280;">Company:</td>
                      <td style="padding: 4px 0; color: #111827; font-weight: 600;">${company}</td>
                    </tr>
                    ` : ''}
                    ${approximateBudget ? `
                    <tr>
                      <td style="padding: 4px 0; color: #6b7280;">Approx. Budget:</td>
                      <td style="padding: 4px 0; color: #111827; font-weight: 600;">${approximateBudget}</td>
                    </tr>
                    ` : ''}
                    <tr>
                      <td style="padding: 4px 0; color: #6b7280;">Submitted On:</td>
                      <td style="padding: 4px 0; color: #111827;">${formattedSubmissionTime}</td>
                    </tr>
                  </table>
                </div>

                <!-- Next Steps Roadmap -->
                <div style="margin-bottom: 24px;">
                  <h3 style="font-size: 15px; font-weight: 700; color: #111827; margin: 0 0 12px 0;">
                    What Happens Next:
                  </h3>
                  <div style="border-left: 2px solid #f1592a; padding-left: 14px; margin-bottom: 12px;">
                    <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111827;">1. Requirement Assessment</p>
                    <p style="margin: 3px 0 0 0; font-size: 13px; color: #6b7280; line-height: 1.5;">
                      Our solutions architecture and business consulting team is reviewing your requirements to map out initial feasibility, technical scope, and timelines.
                    </p>
                  </div>
                  <div style="border-left: 2px solid #f1592a; padding-left: 14px; margin-bottom: 12px;">
                    <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111827;">2. Dedicated Specialist Assignment</p>
                    <p style="margin: 3px 0 0 0; font-size: 13px; color: #6b7280; line-height: 1.5;">
                      A dedicated account specialist is being assigned to your inquiry to ensure focused, personalized attention.
                    </p>
                  </div>
                  <div style="border-left: 2px solid #f1592a; padding-left: 14px;">
                    <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111827;">3. Direct Discovery Touchpoint</p>
                    <p style="margin: 3px 0 0 0; font-size: 13px; color: #6b7280; line-height: 1.5;">
                      We will reach out to you within <strong>24 business hours</strong> to schedule a discovery call and discuss recommendations for your roadmap.
                    </p>
                  </div>
                </div>

                <!-- Portfolio & Enterprise capabilities teaser -->
                <div style="background-color: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 14px 16px; margin-bottom: 24px;">
                  <p style="margin: 0; font-size: 13px; color: #9a3412; line-height: 1.5;">
                    💡 <strong>Explore our Enterprise Portfolio:</strong> In the meantime, please find our attached Company Profile & Case Studies deck (attached as PDF) featuring solutions like <em>Visitorz Management System</em>, <em>Younited Communities</em>, and custom MVP & ERP platforms.
                  </p>
                </div>

                <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 16px 0;">
                  If you have any urgent details to share or need immediate assistance, please feel free to reply directly to this email.
                </p>

                <div style="border-top: 1px solid #f3f4f6; padding-top: 16px; margin-top: 20px;">
                  <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111827;">Warm regards,</p>
                  <p style="margin: 2px 0 0 0; font-size: 13px; color: #f1592a; font-weight: 600;">Business Solutions & Consulting Team</p>
                  <p style="margin: 2px 0 0 0; font-size: 13px; color: #6b7280;">Key Concepts | Empowering Digital Excellence</p>
                </div>
              </div>
              
              <!-- Footer Banner -->
              <div style="background-color: #f9fafb; padding: 18px 24px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
                <p style="margin: 0;">
                  Key Concepts &bull; <a href="https://keyconcepts.co.in" style="color: #f1592a; text-decoration: none;">keyconcepts.co.in</a> &bull; Support: support@keyconcepts.co.in
                </p>
              </div>
            </div>
          `,
        attachments: mailAttachments,
      });
      console.log("Professional confirmation email sent to client successfully");
    } catch (confirmationError) {
      console.error("Failed to send confirmation email to client:", confirmationError);
    }

    return res.status(201).json(normalizeLead(lead));
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({
      message: "Failed to submit contact form",
      error: error.message,
    });
  }
};

export const getContactLeadById = async (req, res) => {
  try {
    const lead = await ContactLead.findById(req.params.id).populate(
      "assignedTo",
      "name email phone role leadType isActive"
    );

    if (!lead) {
      return res.status(404).json({ message: "Contact lead not found" });
    }

    // Auto mark viewed when admin opens detail
    if (!lead.isViewed) {
      lead.isViewed = true;
      lead.viewedAt = new Date();
      await lead.save();
    }

    return res.json({
      success: true,
      lead: normalizeLead(lead),
    });
  } catch (error) {
    console.error("getContactLeadById error:", error);
    return res.status(500).json({ message: "Failed to fetch lead details", error: error.message });
  }
};

export const updateContactLeadStatus = async (req, res) => {
  try {
    const {
      id,
    } = req.params;
    const {
      status,
      quotedAmount,
      proposalLink,
      dealValue,
      kickoffDate,
      lostReason,
      convertedNotes,
      notes,
    } = req.body;

    const allowedStatuses = [
      "New",
      "Contacted",
      "Qualified",
      "Proposal Sent",
      "Negotiation",
      "Converted",
      "Lost",
      "Closed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid lead status" });
    }

    const lead = await ContactLead.findById(id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    // --- Business Validation Gates ---
    // 1. Proposal Sent requires Quoted Deal Value
    if (status === "Proposal Sent") {
      const amount = (quotedAmount || lead.quotedAmount || "").trim();
      if (!amount) {
        return res.status(400).json({
          message: "Quoted Deal Value is required when moving to Proposal Sent",
        });
      }
      lead.quotedAmount = amount;
      if (proposalLink !== undefined) lead.proposalLink = (proposalLink || "").trim();
      lead.proposalSentAt = new Date();
    }

    // 2. Converted requires Final Agreed Deal Value and Kickoff Date
    if (status === "Converted") {
      const finalDealValue = (dealValue || lead.dealValue || lead.quotedAmount || "").trim();
      if (!finalDealValue) {
        return res.status(400).json({
          message: "Final Agreed Deal Value is required when converting a lead",
        });
      }
      const finalKickoffDate = kickoffDate || lead.kickoffDate;
      if (!finalKickoffDate) {
        return res.status(400).json({
          message: "Target Kickoff Date is required when converting a lead",
        });
      }
      lead.dealValue = finalDealValue;
      lead.kickoffDate = new Date(finalKickoffDate);
      lead.convertedNotes = (convertedNotes || notes || lead.convertedNotes || "").trim();
    }

    // 3. Lost / Closed requires a Reason
    if (status === "Lost" || status === "Closed") {
      const reason = (lostReason || notes || lead.lostReason || "").trim();
      if (!reason) {
        return res.status(400).json({
          message: `Reason for loss is required when marking a lead as ${status}`,
        });
      }
      lead.lostReason = reason;
    }

    const oldStatus = lead.status;
    lead.status = status;

    // Build clear activity note
    let activityTitle = `Status changed from ${oldStatus} to ${status}`;
    let activityDetails = notes ? notes.trim() : `Lead stage transitioned to "${status}".`;

    if (status === "Proposal Sent") {
      activityTitle = `Proposal Sent (Quoted: ${lead.quotedAmount})`;
      activityDetails = `Proposal shared with client. Quoted amount: ${lead.quotedAmount}.${lead.proposalLink ? ` Link: ${lead.proposalLink}` : ''}${notes ? ` Notes: ${notes}` : ''}`;
    } else if (status === "Converted") {
      activityTitle = `Deal Won & Converted (${lead.dealValue}) 🏆`;
      const dateStr = lead.kickoffDate ? new Date(lead.kickoffDate).toLocaleDateString('en-IN') : '';
      activityDetails = `Project engagement confirmed. Final deal value: ${lead.dealValue}. Target kickoff: ${dateStr}.${lead.convertedNotes ? ` Notes: ${lead.convertedNotes}` : ''}`;
    } else if (status === "Lost" || status === "Closed") {
      activityTitle = `Lead marked as ${status}: ${lead.lostReason}`;
      activityDetails = `Reason: ${lead.lostReason}.${notes ? ` Notes: ${notes}` : ''}`;
    }

    lead.activities.push({
      type: "Status Change",
      title: activityTitle,
      conversationDetails: activityDetails,
      date: new Date(),
      time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }),
      recordedBy: req.user?.name || "Admin",
    });

    await lead.save();

    const populatedLead = await ContactLead.findById(id).populate(
      "assignedTo",
      "name email phone role leadType isActive"
    );

    return res.json({
      success: true,
      message: `Lead status updated to ${status}`,
      lead: normalizeLead(populatedLead),
    });
  } catch (error) {
    console.error("updateContactLeadStatus error:", error);
    return res.status(500).json({ message: "Failed to update lead status", error: error.message });
  }
};

export const assignContactLead = async (req, res) => {
  try {
    const { id } = req.params;
    const { assigneeId } = req.body;

    const lead = await ContactLead.findById(id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    if (assigneeId) {
      const assignee = await LeadAssignee.findById(assigneeId);
      if (!assignee) {
        return res.status(404).json({ message: "Lead Assignee not found in Master" });
      }

      lead.assignedTo = assignee._id;
      lead.assignedAt = new Date();

      // If status was New, auto-transition to Contacted or keep
      if (lead.status === "New") {
        lead.status = "Contacted";
      }

      lead.activities.push({
        type: "Assignment",
        title: `Lead assigned to ${assignee.name} (${assignee.role})`,
        conversationDetails: `Assigned to team member ${assignee.name}. Category: ${assignee.leadType}. Contact: ${assignee.email} | ${assignee.phone}.`,
        date: new Date(),
        time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }),
        recordedBy: req.user?.name || "Admin",
      });
    } else {
      lead.assignedTo = null;
      lead.assignedAt = null;

      lead.activities.push({
        type: "Assignment",
        title: "Lead unassigned",
        conversationDetails: "Lead was unassigned from team member.",
        date: new Date(),
        time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }),
        recordedBy: req.user?.name || "Admin",
      });
    }

    await lead.save();

    const populatedLead = await ContactLead.findById(id).populate(
      "assignedTo",
      "name email phone role leadType isActive"
    );

    return res.json({
      success: true,
      message: assigneeId ? "Lead successfully assigned" : "Lead unassigned",
      lead: normalizeLead(populatedLead),
    });
  } catch (error) {
    console.error("assignContactLead error:", error);
    return res.status(500).json({ message: "Failed to assign lead", error: error.message });
  }
};

export const addContactLeadActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, title, date, time, conversationDetails, outcome, nextFollowUpDate } = req.body;

    if (!type || !title) {
      return res.status(400).json({ message: "Interaction type and title are required" });
    }

    const lead = await ContactLead.findById(id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    const activityDate = date ? new Date(date) : new Date();
    const activityTime = time || new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });

    lead.activities.push({
      type,
      title: title.trim(),
      date: activityDate,
      time: activityTime,
      conversationDetails: (conversationDetails || "").trim(),
      outcome: (outcome || "").trim(),
      nextFollowUpDate: nextFollowUpDate ? new Date(nextFollowUpDate) : null,
      recordedBy: req.user?.name || "Admin",
    });

    if (nextFollowUpDate) {
      lead.nextFollowUpDate = new Date(nextFollowUpDate);
    }

    await lead.save();

    const populatedLead = await ContactLead.findById(id).populate(
      "assignedTo",
      "name email phone role leadType isActive"
    );

    return res.status(201).json({
      success: true,
      message: "Activity logged successfully",
      lead: normalizeLead(populatedLead),
    });
  } catch (error) {
    console.error("addContactLeadActivity error:", error);
    return res.status(500).json({ message: "Failed to add activity", error: error.message });
  }
};

export const updateContactLead = async (req, res) => {
  try {
    const { id } = req.params;
    const { priority, approximateBudget, company, phone } = req.body;

    const lead = await ContactLead.findById(id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    if (priority) lead.priority = priority;
    if (approximateBudget !== undefined) lead.approximateBudget = approximateBudget;
    if (company !== undefined) lead.company = company;
    if (phone !== undefined) lead.phone = phone;

    await lead.save();

    const populatedLead = await ContactLead.findById(id).populate(
      "assignedTo",
      "name email phone role leadType isActive"
    );

    return res.json({
      success: true,
      message: "Lead details updated successfully",
      lead: normalizeLead(populatedLead),
    });
  } catch (error) {
    console.error("updateContactLead error:", error);
    return res.status(500).json({ message: "Failed to update lead", error: error.message });
  }
};

export const getContactLeadFilterOptions = async (req, res) => {
  try {
    const [distinctSubjects, distinctBudgets] = await Promise.all([
      ContactLead.distinct("subject"),
      ContactLead.distinct("approximateBudget"),
    ]);

    const defaultServices = [
      "Visitorz Management System",
      "Younited Communities",
      "Claim Genie",
      "Product Development",
      "MVP Development",
      "Custom ERP Solutions",
    ];

    const defaultBudgets = [
      "Under ₹5 Lakhs",
      "₹5 – ₹15 Lakhs",
      "₹15 – ₹50 Lakhs",
      "₹50 Lakhs +",
      "Open to discussion",
      "Prefer not to say / Not sure yet",
    ];

    const services = Array.from(new Set([...distinctSubjects, ...defaultServices]))
      .filter(Boolean)
      .sort();

    const budgets = Array.from(new Set([...distinctBudgets, ...defaultBudgets]))
      .filter(Boolean);

    return res.json({
      services,
      budgets,
    });
  } catch (error) {
    console.error("Failed to fetch lead filter options:", error);
    return res.status(500).json({ message: "Failed to fetch filter options" });
  }
};

export const markContactLeadViewed = async (req, res) => {
  try {
    const lead = await ContactLead.findByIdAndUpdate(
      req.params.id,
      { isViewed: true, viewedAt: new Date() },
      { new: true }
    ).populate("assignedTo", "name email phone role leadType isActive");
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    return res.json({ message: "Lead marked as viewed", lead: normalizeLead(lead) });
  } catch (error) {
    return res.status(500).json({ message: "Failed to mark lead as viewed" });
  }
};

export const listContactLeads = async (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  const sort = req.query.sort || "-createdAt";
  const { q, subject, approximateBudget, status, stage, assignedTo, priority, fromDate, toDate } = req.query;
  const query = {};

  // 1. Service / Subject filter
  if (subject && subject.trim() !== "" && subject !== "all") {
    query.subject = { $regex: subject.trim(), $options: "i" };
  }

  // 2. Budget filter
  if (approximateBudget && approximateBudget.trim() !== "" && approximateBudget !== "all") {
    query.approximateBudget = approximateBudget.trim();
  }

  // 3. Status / Pipeline Stage filter
  const filterStatus = stage || status;
  if (filterStatus && filterStatus.trim() !== "" && filterStatus !== "all") {
    const cleanStatus = filterStatus.trim();
    if (cleanStatus === "viewed") {
      query.isViewed = true;
    } else if (cleanStatus === "unviewed") {
      query.$or = [{ isViewed: false }, { isViewed: { $exists: false } }];
    } else if (cleanStatus === "in_progress") {
      query.status = { $in: ["Contacted", "Qualified", "Proposal Sent", "Negotiation"] };
    } else if (cleanStatus === "closed_lost") {
      query.status = { $in: ["Lost", "Closed"] };
    } else {
      query.status = cleanStatus;
    }
  }

  // 4. Assignee filter
  if (assignedTo && assignedTo.trim() !== "" && assignedTo !== "all") {
    if (assignedTo.trim() === "unassigned") {
      query.assignedTo = null;
    } else {
      query.assignedTo = assignedTo.trim();
    }
  }

  // 5. Priority filter
  if (priority && priority.trim() !== "" && priority !== "all") {
    query.priority = priority.trim();
  }

  // 6. Date Range filter (createdAt)
  if ((fromDate && fromDate.trim() !== "") || (toDate && toDate.trim() !== "")) {
    query.createdAt = {};
    if (fromDate && fromDate.trim() !== "") {
      const from = new Date(fromDate.trim());
      if (!isNaN(from.getTime())) {
        query.createdAt.$gte = from;
      }
    }
    if (toDate && toDate.trim() !== "") {
      const to = new Date(toDate.trim());
      if (!isNaN(to.getTime())) {
        to.setHours(23, 59, 59, 999);
        query.createdAt.$lte = to;
      }
    }
    if (Object.keys(query.createdAt).length === 0) {
      delete query.createdAt;
    }
  }

  // 7. Keyword search across name, email, subject, phone, company, approximateBudget, message
  if (q && q.trim() !== "") {
    const term = q.trim();
    const searchConditions = [
      { name: { $regex: term, $options: "i" } },
      { email: { $regex: term, $options: "i" } },
      { subject: { $regex: term, $options: "i" } },
      { phone: { $regex: term, $options: "i" } },
      { company: { $regex: term, $options: "i" } },
      { approximateBudget: { $regex: term, $options: "i" } },
      { message: { $regex: term, $options: "i" } },
    ];

    if (query.$or) {
      query.$and = [{ $or: query.$or }, { $or: searchConditions }];
      delete query.$or;
    } else {
      query.$or = searchConditions;
    }
  }

  const [data, total] = await Promise.all([
    ContactLead.find(query)
      .populate("assignedTo", "name email phone role leadType isActive")
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit),
    ContactLead.countDocuments(query),
  ]);

  const normalizedData = data.map((d) => normalizeLead(d));

  return res.json(paginatedResponse({ data: normalizedData, total, page, limit }));
};

export const deleteContactLead = async (req, res) => {
  const lead = await ContactLead.findByIdAndDelete(req.params.id);
  if (!lead) return res.status(404).json({ message: "Lead not found" });
  return res.json({ message: "Lead deleted" });
};

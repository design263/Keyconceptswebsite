import { ContactLead } from "../models/ContactLead.js";
import { paginatedResponse } from "../utils/apiResponse.js";
import sendEmail from "../../sendEmail.js";
import fs from "fs";
import path from "path";

export const createContactLead = async (req, res) => {
  const { name, email, subject, message } = req.body;
  const companyEmail = process.env.COMPANY_EMAIL;

  try {
    const lead = await ContactLead.create(req.body);

    if (!companyEmail) {
      console.warn("COMPANY_EMAIL is not configured in environment. Admin email won't be sent.");
    }

    // PDF Attachment 
    const pdfFileName = "KC_Profile.pdf";
    // Check paths depending on where node is executed from
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

    // Notification Email
    if (companyEmail) {
      await sendEmail({
        to: companyEmail,
        subject: `New Contact Form Lead: ${subject} - ${name}`,
        html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <div style="background: linear-gradient(135deg, #f1592a 0%, #ff7a45 100%); padding: 20px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Formulation Form Lead</h1>
                <p style="color: rgba(255,255,255,0.9); margin-top: 10px;">Subject: ${subject}</p>
              </div>
              
              <div style="padding: 10px 30px; background-color: #ffffff;">
                <div>
                  <h3 style="margin-top: 30px; color: #1f2937; border-bottom: 2px solid #f1592a; padding-bottom: 2px; display: inline-block; margin: 0;">
                    Lead Information
                  </h3>
                  <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <tr>
                      <td style="padding: 5px 0; color: #6b7280; width: 120px;"><strong>Name:</strong></td>
                      <td style="padding: 5px 0; color: #111827;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0; color: #6b7280;"><strong>Email:</strong></td>
                      <td style="padding: 5px 0; color: #111827;"><a href="mailto:${email}" style="color: #f1592a; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0; color: #6b7280;"><strong>Subject:</strong></td>
                      <td style="padding: 5px 0; color: #111827;">${subject}</td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0; color: #6b7280;"><strong>Approximate Budget:</strong></td>
                      <td style="padding: 5px 0; color: #111827;">${lead.approximateBudget || '—'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0; color: #6b7280;"><strong>Submitted On:</strong></td>
                      <td style="padding: 5px 0; color: #111827;">${new Date(lead.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                    </tr>
                  </table>
                </div>
                
                <div style="margin-bottom: 10px ;margin-top: 10px;">
                  <h3 style="color: #1f2937; border-bottom: 2px solid #f1592a; padding-bottom: 2px; display: inline-block; margin: 0;">Message</h3>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 12px; margin: 30px 0; border: 1px solid #e2e8f0;">
                <p style="white-space: pre-wrap; color: #374151; line-height: 1.6;">
                  ${message || 'No message provided.'}
                </p>
                </div>
                </div>
              </div>
              
              <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                  This is an automated notification from the <strong>Key Concepts</strong> Website.
                </p>
              </div>
            </div>
          `,
      });
    }

    // Confirmation Email
    try {
      await sendEmail({
        to: email,
        subject: `Thank you for contacting Key Concepts - ${subject}`,
        html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
              <div style="background-color: #111827; padding: 30px; text-align: center;">
                <h1 style="color: #f1592a; margin: 0; font-size: 28px;">Hello, ${name}</h1>
                <p style="color: #9ca3af; margin-top: 10when in frontent contact us page submit the form on clcik on the "Book a descovery call " then email can eb seen in the company clcient and submitted user email with company pdf file through the SMTP_USER in .env file corerct teh code and send email with pdf to the form filled userpx;">We've received your query</p>
              </div>
              
              <div style="padding: 20px; background-color: #ffffff;">
                <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                  Thank you for reaching out to <strong>Key Concepts</strong>.
                </p>
                <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                  This email confirms that we have successfully received your inquiry regarding <strong>${subject}</strong>. 
                  Our team will review your message and get back to you shortly.
                </p>
                
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 12px; margin: 30px 0; border: 1px solid #e2e8f0;">
                  <h4 style="margin: 0 0 10px 0; color: #1e293b;">Your Message Summary:</h4>
                  <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
                
                <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                  Best regards,<br/>
                  <strong>Support Team</strong><br/>
                  Key Concepts
                </p>
              </div>
              
              <div style="background-color: #f1592a; padding: 15px; text-align: center;">
                <p style="margin: 0; color: white; font-size: 12px;">
                  Empowering businesses through digital excellence.
                </p>
              </div>
            </div>
          `,
        attachments: mailAttachments,
      });
      console.log("Contact confirmation email sent to user successfully");
    } catch (confirmationError) {
      console.error("Failed to send confirmation email to user:", confirmationError);
    }

    return res.status(201).json(lead);
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({
      message: "Failed to submit contact form",
      error: error.message
    });
  }
};

export const listContactLeads = async (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  const q = req.query.q;
  const sort = req.query.sort || "-createdAt";
  const query = {};

  if (q) {
    query.$or = [
      { name: { $regex: q, $options: "i" } },
      { email: { $regex: q, $options: "i" } },
      { subject: { $regex: q, $options: "i" } },
      { approximateBudget: { $regex: q, $options: "i" } },
    ];
  }

  const [data, total] = await Promise.all([
    ContactLead.find(query).sort(sort).skip((page - 1) * limit).limit(limit),
    ContactLead.countDocuments(query),
  ]);

  return res.json(paginatedResponse({ data, total, page, limit }));
};

export const deleteContactLead = async (req, res) => {
  const lead = await ContactLead.findByIdAndDelete(req.params.id);
  if (!lead) return res.status(404).json({ message: "Lead not found" });
  return res.json({ message: "Lead deleted" });
};

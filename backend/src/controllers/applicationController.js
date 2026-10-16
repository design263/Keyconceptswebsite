import fs from "fs";
import path from "path";
import { Application } from "../models/Application.js";
import { Job } from "../models/Job.js";
import { Interviewer } from "../models/Interviewer.js";
import { paginatedResponse } from "../utils/apiResponse.js";
import sendEmail from "../../sendEmail.js";
import {
  sendInterviewNotificationEmails,
  sendCandidateSelectionEmail,
  sendCandidateRejectionEmail,
} from "../utils/interviewEmailService.js";
import { getInterviewDateTime } from "../services/reminderScheduler.js";

const buildResumeUrl = (req, resumeFilePath) => {
  if (!resumeFilePath) return null;
  const forwardedProto = req.headers["x-forwarded-proto"];
  const protocol = forwardedProto ? String(forwardedProto).split(",")[0] : req.protocol;
  return `${protocol}://${req.get("host")}${resumeFilePath}`;
};

export const createApplication = async (req, res) => {

  console.log("🚀 createApplication API HIT");
  const { jobId, fullName, email, phone, coverLetter } = req.body;
  const companyEmail = process.env.COMPANY_EMAIL;

  try {
    const job = await Job.findById(jobId);
    if (!job || job.status !== "active") {
      if (req.file?.path && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: "Invalid job selected" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required" });
    }

    // Check if candidate already applied to this specific position within the last 7 days (1 week)
    const normalizedEmail = (email || "").trim().toLowerCase();
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const existingApplication = await Application.findOne({
      jobId,
      email: normalizedEmail,
      createdAt: { $gte: oneWeekAgo },
    });

    if (existingApplication) {
      if (req.file?.path && fs.existsSync(req.file.path)) {
        try {
          fs.unlinkSync(req.file.path);
        } catch (unlinkErr) {
          console.warn("Failed to delete duplicate resume file:", unlinkErr);
        }
      }

      return res.status(200).json({
        success: true,
        alreadyApplied: true,
        message: "Thank you for reaching out again! We have received your application for this position and it is currently in progress with our recruitment team. We will reach out to you soon with updates.",
      });
    }

    if (!companyEmail) {
      return res.status(500).json({ message: "COMPANY_EMAIL is not configured in environment." });
    }

    const createdApplication = await Application.create({
      jobId,
      fullName,
      email,
      phone,
      coverLetter,
      resumeFilePath: `/api/applications/resume/${req.file.filename}`,
    });

    const application = await Application.findById(createdApplication._id).populate(
      "jobId",
      "title department location"
    );

    if (!application) {
      return res.status(500).json({ message: "Application saved but failed to reload from database." });
    }

    const resumeFileName = path.basename(application.resumeFilePath);
    const candidatePaths = [
      req.file?.path,
      path.resolve("src/resumes", resumeFileName),
      path.resolve("backend/src/resumes", resumeFileName),
    ].filter(Boolean);
    const resumeAbsolutePath = candidatePaths.find((p) => fs.existsSync(p));

    const mailAttachments = [];
    if (resumeAbsolutePath) {
      mailAttachments.push({
        filename: req.file?.originalname || resumeFileName,
        path: resumeAbsolutePath,
      });
    } else {
      // Do not block mail delivery if attachment path lookup fails.
      console.warn("Resume attachment not found. Sending company email without attachment.", {
        resumeFileName,
        candidatePaths,
      });
    }

    // Fetch all active interviewers from Interviewer master
    let interviewerEmails = [];
    try {
      const activeInterviewers = await Interviewer.find({ isActive: true }).select("name email role");
      interviewerEmails = activeInterviewers
        .map((inv) => (inv.email || "").trim().toLowerCase())
        .filter(Boolean);
    } catch (interviewerErr) {
      console.warn("Failed to fetch active interviewers:", interviewerErr);
    }

    // Support email must always get notified as requested
    const supportEmail = (companyEmail || "support@keyconcepts.co.in").trim().toLowerCase();
    const applicationRecipients = Array.from(
      new Set([supportEmail, ...interviewerEmails])
    ).filter(Boolean);

    // 1. Notification Email to Active Interviewers and Support
    await sendEmail({
      to: applicationRecipients.join(", "),
      subject: `[New Application] ${job.title} - ${application.fullName}`,
      html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="background: linear-gradient(135deg, #f1592a 0%, #ff7a45 100%); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Job Application</h1>
              <p style="color: rgba(255,255,255,0.9); margin-top: 10px;">Position: ${job.title}</p>
            </div>
            
            <div style="padding: 20px; background-color: #ffffff;">
              <div style="margin-bottom: 25px;">
                <h3 style="color: #1f2937; border-bottom: 2px solid #f1592a; padding-bottom: 8px; display: inline-block;">Candidate Information</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Full Name:</strong></td>
                    <td style="padding: 8px 0; color: #111827;">${application.fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0; color: #111827;"><a href="mailto:${application.email}" style="color: #f1592a; text-decoration: none;">${application.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td>
                    <td style="padding: 8px 0; color: #111827;">${application.phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;"><strong>Applied On:</strong></td>
                    <td style="padding: 8px 0; color: #111827;">${new Date(application.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                  </tr>
                </table>
              </div>
              
              <div style="margin-bottom: 15px;">
                <h3 style="color: #1f2937; border-bottom: 2px solid #f1592a; padding-bottom: 8px; display: inline-block;">Cover Letter</h3>
                <div style="background-color: #f9fafb; padding: 10px; border-radius: 8px; border: 1px solid #f3f4f6; color: #4b5563; margin-top: 15px; white-space: pre-wrap;">
                  ${application.coverLetter || 'No cover letter provided.'}
                </div>
              </div>
              
              <div style="background-color: #fff7ed; padding: 15px; border-radius: 8px; border: 1px border-left: 4px solid #f1592a;">
                <p style="margin: 0; color: #c2410c; font-size: 14px;">
                  <strong>Note:</strong> The resume file is attached to this email for your review.
                </p>
              </div>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                This is an automated notification from the <strong>Key Concepts</strong> Career Portal.
              </p>
            </div>
          </div>
      `,
      attachments: mailAttachments
    });

    console.log("Application notification email sent successfully to:", applicationRecipients.join(", "), {
      applicantEmail: application.email,
      applicantName: application.fullName,
      activeInterviewersCount: interviewerEmails.length,
      attachmentIncluded: Boolean(resumeAbsolutePath),
    });

    // 2. Applicant Confirmation Email
    try {
      await sendEmail({
        to: application.email,
        subject: `Application Received: ${job.title} at Key Concepts`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
            <div style="background-color: #111827; padding: 40px; text-align: center;">
              <h1 style="color: #f1592a; margin: 0; font-size: 28px;">Thank You!</h1>
              <p style="color: #9ca3af; margin-top: 10px;">We've received your application</p>
            </div>
            
            <div style="padding: 40px; background-color: #ffffff;">
              <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                Dear <strong>${application.fullName}</strong>,
              </p>
              <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                Thank you for your interest in joining <strong>Key Concepts</strong>. This email confirms that we have successfully received your application for the <strong>${job.title}</strong> position.
              </p>
              
              <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin: 30px 0; border: 1px solid #e2e8f0;">
                <h4 style="margin: 0 0 10px 0; color: #1e293b;">What happens next?</h4>
                <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px; line-height: 1.8;">
                  <li>Our HR team will review your profile and experience.</li>
                  <li>In most cases, we'll get back to you within 5-7 business days.</li>
                  <li>If your profile matches our requirements, we'll reach out for an initial discussion.</li>
                </ul>
              </div>
              
              <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                Best regards,<br/>
                <strong>HR Department</strong><br/>
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
      });
      console.log("Applicant confirmation email sent successfully");
    } catch (confirmationError) {
      console.error("Failed to send confirmation email to applicant:", confirmationError);
    }

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application: {
        ...application.toObject(),
        // resumeUrl: buildResumeUrl(req, application.resumeFilePath),
      }
    });

  } catch (error) {
    console.error("Application submission error:", error);
    return res.status(500).json({
      message: "Failed to submit application",
      error: error.message
    });
  }
};

export const getApplicationFilterOptions = async (req, res) => {
  try {
    const [jobs, departments] = await Promise.all([
      Job.find().select("_id title department").sort("title"),
      Job.distinct("department"),
    ]);

    return res.json({
      jobs: jobs.map((j) => ({ _id: j._id, title: j.title, department: j.department })),
      departments: departments.filter(Boolean).sort(),
      statuses: ["Applied", "Shortlisted", "Interviewing", "Selected", "Rejected"],
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch application filter options" });
  }
};

export const listApplications = async (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  const sort = req.query.sort || "-createdAt";
  const { q, jobId, department, status, fromDate, toDate } = req.query;
  const query = {};

  // 1. Specific Job filter
  let targetJobIds = null;
  if (jobId && jobId.trim() !== "" && jobId !== "all") {
    targetJobIds = [jobId.trim()];
  }

  // 2. Department filter (via Job)
  if (department && department.trim() !== "" && department !== "all") {
    const deptJobs = await Job.find({ department: { $regex: department.trim(), $options: "i" } }).select("_id");
    const deptJobIds = deptJobs.map((j) => j._id.toString());
    if (targetJobIds) {
      targetJobIds = targetJobIds.filter((id) => deptJobIds.includes(id));
    } else {
      targetJobIds = deptJobIds;
    }
  }

  if (targetJobIds !== null) {
    query.jobId = { $in: targetJobIds };
  }

  // 3. Status filter
  if (status && status.trim() !== "" && status !== "all") {
    query.status = status.trim();
  }

  // 4. Date Range filter (createdAt)
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

  // 5. Keyword search (fullName, email, phone, or job title)
  if (q && q.trim() !== "") {
    const term = q.trim();
    const jobs = await Job.find({ title: { $regex: term, $options: "i" } }).select("_id");
    const matchingJobIds = jobs.map((job) => job._id);

    const searchConditions = [
      { fullName: { $regex: term, $options: "i" } },
      { email: { $regex: term, $options: "i" } },
      { phone: { $regex: term, $options: "i" } },
      ...(matchingJobIds.length ? [{ jobId: { $in: matchingJobIds } }] : []),
    ];

    if (query.$or) {
      query.$and = [{ $or: query.$or }, { $or: searchConditions }];
      delete query.$or;
    } else {
      query.$or = searchConditions;
    }
  }

  const [data, total] = await Promise.all([
    Application.find(query)
      .populate("jobId", "title department location")
      .populate("interviewRounds.interviewerId", "name email phone role interviewType")
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit),
    Application.countDocuments(query),
  ]);

  const normalizedData = data.map((application) => ({
    ...application.toObject(),
    resumeUrl: buildResumeUrl(req, application.resumeFilePath),
  }));

  return res.json(paginatedResponse({ data: normalizedData, total, page, limit }));
};

export const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate("jobId", "title department location experienceLevel type status")
      .populate("interviewRounds.interviewerId", "name email phone role interviewType isActive");

    if (!application) {
      return res.status(404).json({ message: "Candidate application not found" });
    }

    return res.json({
      success: true,
      application: {
        ...application.toObject(),
        resumeUrl: buildResumeUrl(req, application.resumeFilePath),
      },
    });
  } catch (error) {
    console.error("getApplicationById error:", error);
    return res.status(500).json({ message: "Failed to fetch candidate details", error: error.message });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { status, action, sendEmail = true } = req.body;
    const allowed = ["Applied", "Shortlisted", "Interviewing", "Selected", "Rejected"];
    if (!status || !allowed.includes(status)) {
      return res.status(400).json({ message: `Invalid status. Allowed: ${allowed.join(", ")}` });
    }

    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: "Candidate application not found" });
    }

    const oldStatus = application.status || "Applied";

    if (oldStatus === "Rejected" && status === "Selected") {
      return res.status(400).json({
        message: "Cannot select a rejected candidate directly. Please reconsider the candidate first.",
      });
    }

    if (oldStatus === "Applied" && status === "Selected") {
      return res.status(400).json({
        message: "Candidate must be shortlisted before being selected. Please shortlist the candidate first.",
      });
    }

    application.status = status;

    if (!application.activities) {
      application.activities = [];
    }

    const isReopen = oldStatus === "Rejected";
    const job = await Job.findById(application.jobId);
    let successMessage = `Candidate status updated to ${status}`;

    // Handle Selection Email
    if (status === "Selected") {
      if (sendEmail !== false) {
        try {
          await sendCandidateSelectionEmail({
            application,
            job,
            hrName: req.user?.name || "HR Team",
            companyName: "Key Concepts Innovations Pvt. Ltd.",
          });
          application.activities.unshift({
            type: "status_change",
            title: "Candidate Selected",
            description: `Candidate marked as Selected. Congratulations email dispatched to ${application.email}.`,
          });
          successMessage = "Candidate marked as Selected and congratulations email sent!";
        } catch (mailErr) {
          console.error("Failed to send selection email:", mailErr);
          application.activities.unshift({
            type: "status_change",
            title: "Candidate Selected",
            description: `Candidate marked as Selected (Email dispatch failed: ${mailErr.message}).`,
          });
        }
      } else {
        application.activities.unshift({
          type: "status_change",
          title: "Candidate Selected",
          description: `Candidate marked as Selected by Admin (Email notification skipped).`,
        });
      }
    }
    // Handle Rejection vs Ignore
    else if (status === "Rejected") {
      // Rejection means only genuine rejection, not the ignore
      const isIgnore = action === "ignore" || sendEmail === false;

      if (!isIgnore) {
        // Genuine interview rejection -> send formal rejection email
        try {
          await sendCandidateRejectionEmail({
            application,
            job,
            hrName: req.user?.name || "HR Team",
            companyName: "Key Concepts Innovations Pvt. Ltd.",
          });
          application.activities.unshift({
            type: "status_change",
            title: "Candidate Rejected",
            description: `Candidate marked as Rejected. Formal interview rejection email dispatched to ${application.email}.`,
          });
          successMessage = "Candidate marked as Rejected and rejection email sent";
        } catch (mailErr) {
          console.error("Failed to send rejection email:", mailErr);
          application.activities.unshift({
            type: "status_change",
            title: "Candidate Rejected",
            description: `Candidate marked as Rejected (Email dispatch failed: ${mailErr.message}).`,
          });
        }
      } else {
        // Ignored / Archived -> NO email sent
        application.activities.unshift({
          type: "status_change",
          title: "Candidate Ignored / Archived",
          description: "Application ignored/archived by Admin. No rejection email sent.",
        });
        successMessage = "Candidate marked as Ignored (No email sent)";
      }
    }
    // Other Statuses (Applied, Shortlisted, Interviewing, Reopening)
    else {
      application.activities.unshift({
        type: "status_change",
        title: isReopen ? `Candidate Reopened (${status})` : `Status changed to ${status}`,
        description: isReopen
          ? `Candidate reconsidered by Admin and moved from Rejected to ${status}.`
          : `Candidate status updated from ${oldStatus} to ${status} by Admin.`,
      });
    }

    await application.save();

    const updated = await Application.findById(application._id)
      .populate("jobId", "title department location experienceLevel type status")
      .populate("interviewRounds.interviewerId", "name email phone role interviewType isActive");

    return res.json({
      success: true,
      message: successMessage,
      application: {
        ...updated.toObject(),
        resumeUrl: buildResumeUrl(req, updated.resumeFilePath),
      },
    });
  } catch (error) {
    console.error("updateApplicationStatus error:", error);
    return res.status(500).json({ message: "Failed to update candidate status", error: error.message });
  }
};

export const scheduleInterviewRound = async (req, res) => {
  try {
    const {
      roundName,
      interviewerId,
      interviewDate,
      interviewTime,
      duration = "45 mins",
      location,
      notes = "",
    } = req.body;

    if (!roundName || !interviewerId || !interviewDate || !interviewTime || !location) {
      return res.status(400).json({
        message: "Round name, interviewer, interview date, interview time, and location/link are required",
      });
    }

    // Validate that interview date and time cannot be in the past
    const scheduledDateTime = getInterviewDateTime(interviewDate, interviewTime);
    if (!scheduledDateTime) {
      return res.status(400).json({ message: "Invalid interview date or time format" });
    }

    const oneMinuteAgo = Date.now() - 60 * 1000;
    if (scheduledDateTime.getTime() < oneMinuteAgo) {
      return res.status(400).json({
        message: "Interview date and time cannot be in the past. Please select a future date and time.",
      });
    }

    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: "Candidate application not found" });
    }

    if (application.status === "Rejected") {
      return res.status(400).json({
        message: "Cannot schedule an interview for a rejected candidate. Please reconsider the candidate first.",
      });
    }

    if (application.status === "Applied") {
      return res.status(400).json({
        message: "Candidate must be shortlisted before scheduling an interview round. Please shortlist the candidate first.",
      });
    }

    const interviewer = await Interviewer.findById(interviewerId);
    if (!interviewer) {
      return res.status(404).json({ message: "Assigned interviewer not found" });
    }

    const job = await Job.findById(application.jobId);

    const roundNumber = (application.interviewRounds?.length || 0) + 1;
    const newRound = {
      roundNumber,
      roundName: roundName.trim(),
      interviewerId,
      interviewDate: interviewDate.trim(),
      interviewTime: interviewTime.trim(),
      duration: duration.trim() || "45 mins",
      location: location.trim(),
      notes: notes.trim(),
      interviewerReminder: req.body.interviewerReminder || "1 hour before",
      isReminderSent: false,
      status: "Scheduled",
      rescheduleReason: "",
    };

    if (!application.interviewRounds) {
      application.interviewRounds = [];
    }
    application.interviewRounds.push(newRound);

    // Auto-advance application status to Interviewing if currently Shortlisted
    if (application.status === "Shortlisted") {
      application.status = "Interviewing";
    }

    if (!application.activities) {
      application.activities = [];
    }
    application.activities.unshift({
      type: "round_scheduled",
      title: `Round ${roundNumber}: ${roundName.trim()} Scheduled`,
      description: `Assigned to ${interviewer.name} (${interviewer.role}) for ${interviewDate.trim()} at ${interviewTime.trim()} (${duration.trim() || "45 mins"}).`,
    });

    await application.save();

    // Trigger dual emails with await to ensure SMTP delivery
    try {
      await sendInterviewNotificationEmails({
        application,
        job,
        interviewer,
        round: newRound,
        isRescheduled: false,
      });
    } catch (mailErr) {
      console.error("Async email dispatch error on round schedule:", mailErr);
    }

    const updated = await Application.findById(application._id)
      .populate("jobId", "title department location experienceLevel type status")
      .populate("interviewRounds.interviewerId", "name email phone role interviewType isActive");

    return res.status(201).json({
      success: true,
      message: `Round ${roundNumber} scheduled successfully and notification emails sent`,
      application: {
        ...updated.toObject(),
        resumeUrl: buildResumeUrl(req, updated.resumeFilePath),
      },
    });
  } catch (error) {
    console.error("scheduleInterviewRound error:", error);
    return res.status(500).json({ message: "Failed to schedule interview round", error: error.message });
  }
};

export const updateInterviewRound = async (req, res) => {
  try {
    const { roundId } = req.params;
    const {
      status, // "Scheduled", "Completed", "Rescheduled", "Not Completed", "Cancelled"
      roundName,
      interviewerId,
      interviewDate,
      interviewTime,
      duration,
      location,
      notes,
      rescheduleReason,
    } = req.body;

    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: "Candidate application not found" });
    }

    if (application.status === "Rejected") {
      return res.status(400).json({
        message: "Cannot modify or reschedule interview rounds for a rejected candidate. Please reconsider the candidate first.",
      });
    }

    if (application.status === "Applied") {
      return res.status(400).json({
        message: "Candidate must be shortlisted before modifying interview rounds.",
      });
    }

    const round = application.interviewRounds?.id(roundId);
    if (!round) {
      return res.status(404).json({ message: "Interview round not found" });
    }

    const terminalStatuses = ["Completed", "Not Completed", "Cancelled"];
    if (terminalStatuses.includes(round.status)) {
      return res.status(400).json({
        message: `This interview round has already been marked as "${round.status}" and cannot be modified.`,
      });
    }

    const isReschedule =
      status === "Rescheduled" ||
      (interviewDate && interviewDate !== round.interviewDate) ||
      (interviewTime && interviewTime !== round.interviewTime);

    // Validate that interview date and time cannot be in the past when scheduling or rescheduling
    if (isReschedule || interviewDate || interviewTime) {
      const targetDate = interviewDate ? interviewDate.trim() : round.interviewDate;
      const targetTime = interviewTime ? interviewTime.trim() : round.interviewTime;
      const scheduledDateTime = getInterviewDateTime(targetDate, targetTime);
      if (!scheduledDateTime) {
        return res.status(400).json({ message: "Invalid interview date or time format" });
      }

      const oneMinuteAgo = Date.now() - 60 * 1000;
      if (scheduledDateTime.getTime() < oneMinuteAgo) {
        return res.status(400).json({
          message: "Interview date and time cannot be in the past. Please select a future date and time.",
        });
      }
    }

    if (roundName) round.roundName = roundName.trim();
    if (interviewerId) round.interviewerId = interviewerId;
    if (interviewDate) round.interviewDate = interviewDate.trim();
    if (interviewTime) round.interviewTime = interviewTime.trim();
    if (duration) round.duration = duration.trim();
    if (location) round.location = location.trim();
    if (notes !== undefined) round.notes = notes.trim();
    if (rescheduleReason !== undefined) round.rescheduleReason = rescheduleReason.trim();
    if (req.body.interviewerReminder !== undefined) round.interviewerReminder = req.body.interviewerReminder.trim();

    const oldStatus = round.status;
    if (status) {
      round.status = status;
    }

    if (!application.activities) {
      application.activities = [];
    }

    if (isReschedule || status === "Rescheduled") {
      round.status = "Rescheduled";
      round.isReminderSent = false;
      round.reminderSentAt = undefined;
      application.activities.unshift({
        type: "round_rescheduled",
        title: `${round.roundName} Rescheduled`,
        description: `Rescheduled to ${round.interviewDate} at ${round.interviewTime}.${rescheduleReason ? ` Reason: ${rescheduleReason}` : ""
          }`,
      });

      // Dispatch updated email notification
      const [interviewer, job] = await Promise.all([
        Interviewer.findById(round.interviewerId),
        Job.findById(application.jobId),
      ]);

      try {
        await sendInterviewNotificationEmails({
          application,
          job,
          interviewer,
          round,
          isRescheduled: true,
          reason: rescheduleReason || "Interview time updated by admin",
        });
      } catch (mailErr) {
        console.error("Async email dispatch error on round reschedule:", mailErr);
      }
    } else {
      application.activities.unshift({
        type: "round_updated",
        title: `${round.roundName} marked as ${round.status}`,
        description: `Round status changed from ${oldStatus} to ${round.status}.${notes ? ` Notes: ${notes}` : ""}`,
      });
    }

    await application.save();

    const updated = await Application.findById(application._id)
      .populate("jobId", "title department location experienceLevel type status")
      .populate("interviewRounds.interviewerId", "name email phone role interviewType isActive");

    return res.json({
      success: true,
      message: isReschedule
        ? "Interview round rescheduled and emails dispatched"
        : `Round status updated to ${round.status}`,
      application: {
        ...updated.toObject(),
        resumeUrl: buildResumeUrl(req, updated.resumeFilePath),
      },
    });
  } catch (error) {
    console.error("updateInterviewRound error:", error);
    return res.status(500).json({ message: "Failed to update interview round", error: error.message });
  }
};

export const getResume = async (req, res) => {
  const filePath = path.resolve("backend/src/resumes", req.params.fileName);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "Resume not found" });
  }
  return res.sendFile(filePath);
};

export const deleteApplication = async (req, res) => {
  const application = await Application.findByIdAndDelete(req.params.id);
  if (!application) return res.status(404).json({ message: "Application not found" });

  const fileName = path.basename(application.resumeFilePath);
  const filePath = path.resolve("backend/src/resumes", fileName);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

  return res.json({ message: "Application deleted" });
};


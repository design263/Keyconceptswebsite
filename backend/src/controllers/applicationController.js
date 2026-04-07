import fs from "fs";
import path from "path";
import { Application } from "../models/Application.js";
import { Job } from "../models/Job.js";
import { paginatedResponse } from "../utils/apiResponse.js";
import sendEmail from "../../sendEmail.js";

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
      return res.status(400).json({ message: "Invalid job selected" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required" });
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

    // 1. Company Notification Email (required)
    await sendEmail({
      to: companyEmail,
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

    console.log("Company notification email sent successfully to:", companyEmail, {
      applicantEmail: application.email,
      applicantName: application.fullName,
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

export const listApplications = async (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  const sort = req.query.sort || "-createdAt";
  const q = req.query.q;
  const query = {};

  if (q) {
    const jobs = await Job.find({ title: { $regex: q, $options: "i" } }).select("_id");
    const matchingJobIds = jobs.map((job) => job._id);

    query.$or = [
      { fullName: { $regex: q, $options: "i" } },
      { email: { $regex: q, $options: "i" } },
      { phone: { $regex: q, $options: "i" } },
      ...(matchingJobIds.length ? [{ jobId: { $in: matchingJobIds } }] : []),
    ];
  }

  const [data, total] = await Promise.all([
    Application.find(query)
      .populate("jobId", "title department location")
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

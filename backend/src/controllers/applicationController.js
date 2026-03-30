import fs from "fs";
import path from "path";
import { Application } from "../models/Application.js";
import { Job } from "../models/Job.js";
import { paginatedResponse } from "../utils/apiResponse.js";

export const createApplication = async (req, res) => {
  const { jobId, fullName, email, phone, coverLetter } = req.body;
  const job = await Job.findById(jobId);
  if (!job || job.status !== "active") {
    return res.status(400).json({ message: "Invalid job selected" });
  }
  if (!req.file) {
    return res.status(400).json({ message: "Resume file is required" });
  }

  const application = await Application.create({
    jobId,
    fullName,
    email,
    phone,
    coverLetter,
    resumeFilePath: `/api/applications/resume/${req.file.filename}`,
  });

  return res.status(201).json(application);
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

  return res.json(paginatedResponse({ data, total, page, limit }));
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

import { Job } from "../models/Job.js";
import { paginatedResponse } from "../utils/apiResponse.js";

const buildFilters = ({ q, status }) => {
  const filter = {};
  if (status) filter.status = status;
  if (q) {
    filter.$or = [
      { title: { $regex: q, $options: "i" } },
      { department: { $regex: q, $options: "i" } },
      { location: { $regex: q, $options: "i" } },
    ];
  }
  return filter;
};

const normalizeList = (value) => {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  if (typeof value === "string") return value.split(/\n|,/).map((item) => item.trim()).filter(Boolean);
  return [];
};

const normalizeJobPayload = (payload) => ({
  ...payload,
  requirements: normalizeList(payload.requirements),
  responsibilities: normalizeList(payload.responsibilities),
  niceToHave: normalizeList(payload.niceToHave),
  benefits: normalizeList(payload.benefits),
});

export const listJobs = async (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  const sort = req.query.sort || "-createdAt";
  const filter = buildFilters(req.query);

  const [data, total] = await Promise.all([
    Job.find(filter).sort(sort).skip((page - 1) * limit).limit(limit),
    Job.countDocuments(filter),
  ]);

  return res.json(paginatedResponse({ data, total, page, limit }));
};

export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });
  return res.json(job);
};

export const createJob = async (req, res) => {
  const job = await Job.create(normalizeJobPayload(req.body));
  return res.status(201).json(job);
};

export const updateJob = async (req, res) => {
  const payload = normalizeJobPayload(req.body);
  const job = await Job.findByIdAndUpdate(req.params.id, payload, { new: true, runValidators: true });
  if (!job) return res.status(404).json({ message: "Job not found" });
  return res.json(job);
};

export const deleteJob = async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });
  return res.json({ message: "Job deleted" });
};

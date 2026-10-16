import { Job } from "../models/Job.js";
import { paginatedResponse } from "../utils/apiResponse.js";

const buildFilters = (query = {}) => {
  const { q, status, department, location, employmentType, experience, fromDate, toDate } = query;
  const filter = {};

  if (status && status.trim() !== "" && status !== "all") {
    filter.status = status.trim();
  }
  if (department && department.trim() !== "" && department !== "all") {
    filter.department = { $regex: department.trim(), $options: "i" };
  }
  if (location && location.trim() !== "" && location !== "all") {
    filter.location = { $regex: location.trim(), $options: "i" };
  }
  if (employmentType && employmentType.trim() !== "" && employmentType !== "all") {
    filter.employmentType = { $regex: employmentType.trim(), $options: "i" };
  }
  if (experience && experience.trim() !== "" && experience !== "all") {
    filter.experience = { $regex: experience.trim(), $options: "i" };
  }

  if ((fromDate && fromDate.trim() !== "") || (toDate && toDate.trim() !== "")) {
    filter.createdAt = {};
    if (fromDate && fromDate.trim() !== "") {
      const from = new Date(fromDate.trim());
      if (!isNaN(from.getTime())) {
        filter.createdAt.$gte = from;
      }
    }
    if (toDate && toDate.trim() !== "") {
      const to = new Date(toDate.trim());
      if (!isNaN(to.getTime())) {
        to.setHours(23, 59, 59, 999);
        filter.createdAt.$lte = to;
      }
    }
    if (Object.keys(filter.createdAt).length === 0) {
      delete filter.createdAt;
    }
  }

  if (q && q.trim() !== "") {
    const term = q.trim();
    filter.$or = [
      { title: { $regex: term, $options: "i" } },
      { department: { $regex: term, $options: "i" } },
      { location: { $regex: term, $options: "i" } },
    ];
  }
  return filter;
};

export const getJobFilterOptions = async (req, res) => {
  try {
    const [departments, locations, employmentTypes, experiences] = await Promise.all([
      Job.distinct("department"),
      Job.distinct("location"),
      Job.distinct("employmentType"),
      Job.distinct("experience"),
    ]);

    return res.json({
      departments: departments.filter(Boolean).sort(),
      locations: locations.filter(Boolean).sort(),
      employmentTypes: employmentTypes.filter(Boolean).sort(),
      experiences: experiences.filter(Boolean).sort(),
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch filter options" });
  }
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

import { CaseStudy } from "../models/CaseStudy.js";
import { paginatedResponse } from "../utils/apiResponse.js";

const slugify = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalizeMetrics = (value) => {
  if (Array.isArray(value)) {
    return value
      .map((item) => ({
        label: String(item?.label || "").trim(),
        value: String(item?.value || "").trim(),
      }))
      .filter((item) => item.label && item.value);
  }

  if (typeof value === "string") {
    return value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [label, ...rest] = line.split(":");
        return {
          label: String(label || "").trim(),
          value: String(rest.join(":") || "").trim(),
        };
      })
      .filter((item) => item.label && item.value);
  }

  return [];
};

const normalizeCaseStudyPayload = (payload = {}) => ({
  ...payload,
  slug: slugify(payload.slug || payload.title || ""),
  metrics: normalizeMetrics(payload.metrics),
  featured: payload.featured === true || payload.featured === "true",
  publishedAt: payload.publishedAt || null,
});

const buildFilters = ({ q, status, industry }, includeInactive = false) => {
  const filter = {};

  if (status) {
    filter.status = status;
  } else if (!includeInactive) {
    filter.status = "active";
  }

  if (industry) {
    filter.industry = industry;
  }

  if (q) {
    filter.$or = [
      { title: { $regex: q, $options: "i" } },
      { client: { $regex: q, $options: "i" } },
      { industry: { $regex: q, $options: "i" } },
      { challenge: { $regex: q, $options: "i" } },
      { result: { $regex: q, $options: "i" } },
    ];
  }

  return filter;
};

export const listCaseStudies = async (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  const sort = req.query.sort || "-createdAt";
  const includeInactive = Boolean(req.headers.authorization);
  const filter = buildFilters(req.query, includeInactive);

  const [data, total] = await Promise.all([
    CaseStudy.find(filter).sort(sort).skip((page - 1) * limit).limit(limit),
    CaseStudy.countDocuments(filter),
  ]);

  return res.json(paginatedResponse({ data, total, page, limit }));
};

export const getCaseStudy = async (req, res) => {
  const caseStudy = await CaseStudy.findById(req.params.id);
  if (!caseStudy) return res.status(404).json({ message: "Case study not found" });
  return res.json(caseStudy);
};

export const getCaseStudyBySlug = async (req, res) => {
  const caseStudy = await CaseStudy.findOne({ slug: req.params.slug, status: "active" });
  if (!caseStudy) return res.status(404).json({ message: "Case study not found" });
  return res.json(caseStudy);
};

export const createCaseStudy = async (req, res) => {
  const caseStudy = await CaseStudy.create(normalizeCaseStudyPayload(req.body));
  return res.status(201).json(caseStudy);
};

export const updateCaseStudy = async (req, res) => {
  const payload = normalizeCaseStudyPayload(req.body);
  const caseStudy = await CaseStudy.findByIdAndUpdate(req.params.id, payload, {
    new: true,
    runValidators: true,
  });
  if (!caseStudy) return res.status(404).json({ message: "Case study not found" });
  return res.json(caseStudy);
};

export const deleteCaseStudy = async (req, res) => {
  const caseStudy = await CaseStudy.findByIdAndDelete(req.params.id);
  if (!caseStudy) return res.status(404).json({ message: "Case study not found" });
  return res.json({ message: "Case study deleted" });
};

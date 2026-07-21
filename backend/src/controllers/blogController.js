import { Blog } from "../models/Blog.js";
import { paginatedResponse } from "../utils/apiResponse.js";

const slugify = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalizeList = (value) => {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  if (typeof value === "string") return value.split(/\n|,/).map((item) => item.trim()).filter(Boolean);
  return [];
};

const normalizeBlogPayload = (payload = {}) => ({
  ...payload,
  slug: slugify(payload.slug || payload.title || ""),
  tags: normalizeList(payload.tags),
  featured: payload.featured === true || payload.featured === "true",
  publishedAt: payload.publishedAt || null,
});

const buildFilters = ({ q, status, category }, includeInactive = false) => {
  const filter = {};

  if (status) {
    filter.status = status;
  } else if (!includeInactive) {
    filter.status = "active";
  }

  if (category) {
    filter.category = category;
  }

  if (q) {
    filter.$or = [
      { title: { $regex: q, $options: "i" } },
      { excerpt: { $regex: q, $options: "i" } },
      { author: { $regex: q, $options: "i" } },
      { category: { $regex: q, $options: "i" } },
      { tags: { $regex: q, $options: "i" } },
    ];
  }

  return filter;
};

export const listBlogs = async (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  const sort = req.query.sort || "-createdAt";
  const includeInactive = Boolean(req.headers.authorization);
  const filter = buildFilters(req.query, includeInactive);

  const [data, total] = await Promise.all([
    Blog.find(filter).sort(sort).skip((page - 1) * limit).limit(limit),
    Blog.countDocuments(filter),
  ]);

  return res.json(paginatedResponse({ data, total, page, limit }));
};

export const getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  return res.json(blog);
};

export const getBlogBySlug = async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug, status: "active" });
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  return res.json(blog);
};

export const createBlog = async (req, res) => {
  const blog = await Blog.create(normalizeBlogPayload(req.body));
  return res.status(201).json(blog);
};

export const updateBlog = async (req, res) => {
  const payload = normalizeBlogPayload(req.body);
  const blog = await Blog.findByIdAndUpdate(req.params.id, payload, { new: true, runValidators: true });
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  return res.json(blog);
};

export const deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  return res.json({ message: "Blog deleted" });
};

import mongoose from "mongoose";

const stringList = [{ type: String, trim: true }];

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, unique: true, lowercase: true },
    excerpt: { type: String, required: true, trim: true },
    contentHtml: { type: String, required: true, trim: true },
    image: { type: String, default: "", trim: true },
    category: { type: String, default: "", trim: true },
    author: { type: String, default: "", trim: true },
    readTime: { type: String, default: "", trim: true },
    tags: { type: stringList, default: [] },
    featured: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);

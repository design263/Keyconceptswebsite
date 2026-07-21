import mongoose from "mongoose";

const metricSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const caseStudySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, unique: true, lowercase: true },
    client: { type: String, required: true, trim: true },
    industry: { type: String, required: true, trim: true },
    challenge: { type: String, required: true, trim: true },
    result: { type: String, required: true, trim: true },
    image: { type: String, default: "", trim: true },
    metrics: { type: [metricSchema], default: [] },
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

export const CaseStudy = mongoose.model("CaseStudy", caseStudySchema);

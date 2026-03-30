import mongoose from "mongoose";

const stringList = [{ type: String, trim: true }];

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    requirements: { type: stringList, default: [] },
    responsibilities: { type: stringList, default: [] },
    niceToHave: { type: stringList, default: [] },
    benefits: { type: stringList, default: [] },
    salary: { type: String, default: "", trim: true },
    experience: { type: String, required: true, trim: true },
    employmentType: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);

import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    coverLetter: { type: String, required: true, trim: true },
    resumeFilePath: { type: String, required: true },
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);

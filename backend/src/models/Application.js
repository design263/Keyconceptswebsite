import mongoose from "mongoose";

const interviewRoundSchema = new mongoose.Schema(
  {
    roundNumber: { type: Number, required: true },
    roundName: { type: String, required: true, trim: true },
    interviewerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Interviewer",
      required: true,
    },
    interviewDate: { type: String, required: true },
    interviewTime: { type: String, required: true },
    duration: { type: String, default: "45 mins" },
    location: { type: String, required: true, trim: true },
    notes: { type: String, trim: true, default: "" },
    interviewerReminder: { type: String, default: "1 hour before" },
    isReminderSent: { type: Boolean, default: false },
    reminderSentAt: { type: Date },
    status: {
      type: String,
      enum: ["Scheduled", "Completed", "Rescheduled", "Not Completed", "Cancelled"],
      default: "Scheduled",
    },
    rescheduleReason: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

const activitySchema = new mongoose.Schema(
  {
    type: { type: String, required: true }, // e.g. status_change, round_scheduled, round_rescheduled, round_updated
    title: { type: String, required: true },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

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
    status: {
      type: String,
      enum: ["Applied", "Shortlisted", "Interviewing", "Selected", "Rejected"],
      default: "Applied",
    },
    interviewRounds: [interviewRoundSchema],
    activities: [activitySchema],
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);


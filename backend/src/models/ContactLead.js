import mongoose from "mongoose";

const leadActivitySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Call", "Email", "WhatsApp", "Meeting", "Note", "Status Change", "Assignment"],
      required: true,
    },
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    time: { type: String, default: "" },
    conversationDetails: { type: String, trim: true, default: "" },
    outcome: { type: String, trim: true, default: "" },
    nextFollowUpDate: { type: Date, default: null },
    recordedBy: { type: String, default: "Admin" },
  },
  { timestamps: true }
);

const contactLeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true },
    phone: { type: String, trim: true, default: "" },
    company: { type: String, trim: true, default: "" },
    approximateBudget: { type: String, trim: true, default: "" },
    message: { type: String, required: true, trim: true },
    
    // Status and Pipeline Lifecycle
    status: {
      type: String,
      enum: ["New", "Contacted", "Qualified", "Proposal Sent", "Negotiation", "Converted", "Lost", "Closed"],
      default: "New",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Urgent"],
      default: "Medium",
    },
    
    // Assignment
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LeadAssignee",
      default: null,
    },
    assignedAt: { type: Date, default: null },

    // Proposal Details
    quotedAmount: { type: String, trim: true, default: "" },
    proposalLink: { type: String, trim: true, default: "" },
    proposalSentAt: { type: Date, default: null },

    // Conversion & Closure Details
    dealValue: { type: String, trim: true, default: "" },
    kickoffDate: { type: Date, default: null },
    lostReason: { type: String, trim: true, default: "" },
    convertedNotes: { type: String, trim: true, default: "" },
    nextFollowUpDate: { type: Date, default: null },

    // Complete Interaction History
    activities: [leadActivitySchema],

    isViewed: { type: Boolean, default: false },
    viewedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export const ContactLead = mongoose.model("ContactLead", contactLeadSchema);

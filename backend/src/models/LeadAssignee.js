import mongoose from "mongoose";

const leadAssigneeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: String,
            required: true,
            trim: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        leadType: {
            type: String,
            enum: ["Sales", "Business Development", "Technical Support"],
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

export const LeadAssignee = mongoose.model("LeadAssignee", leadAssigneeSchema);

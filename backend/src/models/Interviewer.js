import mongoose from "mongoose";

const interviewerSchema = new mongoose.Schema(
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
            default: true
        },
        interviewType: {
            type: String,
            enum: ["Technical", "HR", "Managerial"],
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
)

export const Interviewer = mongoose.model("Interviewer", interviewerSchema);
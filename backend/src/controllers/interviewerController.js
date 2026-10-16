import { Interviewer } from "../models/Interviewer.js";
import { paginatedResponse } from "../utils/apiResponse.js";

export const createInterviewer = async (req, res) => {
    try {
        const { name, email, phone, role, interviewType } = req.body;

        // Required fields
        if (!name || !email || !phone || !role || !interviewType) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email",
            });
        }

        // Phone validation
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid 10-digit phone number",
            });
        }

        // Interview type validation
        const allowedTypes = ["Technical", "HR", "Managerial"];

        if (!allowedTypes.includes(interviewType)) {
            return res.status(400).json({
                success: false,
                message: "Invalid interview type",
            });
        }

        // Duplicate email
        const existingInterviewer = await Interviewer.findOne({
            email: email.toLowerCase(),
        });

        if (existingInterviewer) {
            return res.status(409).json({
                success: false,
                message: "Interviewer with this email already exists",
            });
        }

        // Create interviewer
        const interviewer = await Interviewer.create({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            phone: phone.trim(),
            role: role.trim(),
            interviewType,
        });

        return res.status(201).json({
            success: true,
            message: "Interviewer created successfully",
            data: interviewer,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const listInterviewers = async (req, res) => {
    const {
        page = 1,
        limit = 10,
        sort = "-createdAt",
        search,
        interviewType,
        isActive,
        role,
    } = { ...req.query, ...req.body };

    try {
        const filters = {};
        if (search) {
            filters.$or = [
                { name: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { phone: { $regex: search, $options: "i" } },
                { role: { $regex: search, $options: "i" } },
                { interviewType: { $regex: search, $options: "i" } },
            ];
        }

        if (interviewType) {
            filters.interviewType = interviewType;
        }

        if (role) {
            filters.role = role;
        }

        if (isActive !== undefined && isActive !== "" && isActive !== "all") {
            filters.isActive = isActive === "true" || isActive === true;
        }

        const interviewers = await Interviewer.find(filters)
            .sort(sort)
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        const total = await Interviewer.countDocuments(filters);

        return res.json(
            paginatedResponse({
                data: interviewers,
                total,
                page: Number(page),
                limit: Number(limit),
            })
        );
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export const updateInterviewer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, role, interviewType, isActive } = req.body;

        // Check if interviewer exists
        const interviewer = await Interviewer.findById(id);

        if (!interviewer) {
            return res.status(404).json({
                success: false,
                message: "Interviewer not found",
            });
        }

        // Check duplicate email
        if (email && email.toLowerCase() !== interviewer.email) {
            const existingInterviewer = await Interviewer.findOne({
                email: email.toLowerCase(),
                _id: { $ne: id },
            });

            if (existingInterviewer) {
                return res.status(409).json({
                    success: false,
                    message: "Email already exists",
                });
            }
        }

        // Update
        interviewer.name = name ?? interviewer.name;
        interviewer.email = email?.toLowerCase() ?? interviewer.email;
        interviewer.phone = phone ?? interviewer.phone;
        interviewer.role = role ?? interviewer.role;
        interviewer.interviewType =
            interviewType ?? interviewer.interviewType;
        interviewer.isActive = isActive ?? interviewer.isActive;

        await interviewer.save();

        return res.status(200).json({
            success: true,
            message: "Interviewer updated successfully",
            data: interviewer,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteInterviewer = async (req, res) => {
    try {
        const { id } = req.params;

        const interviewer = await Interviewer.findByIdAndDelete(id);

        if (!interviewer) {
            return res.status(404).json({
                success: false,
                message: "Interviewer not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Interviewer deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
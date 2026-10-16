import { LeadAssignee } from "../models/LeadAssignee.js";
import { paginatedResponse } from "../utils/apiResponse.js";

export const createLeadAssignee = async (req, res) => {
    try {
        const { name, email, phone, role, leadType } = req.body;

        // Required fields
        if (!name || !email || !phone || !role || !leadType) {
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

        // Lead type validation
        const allowedTypes = ["Sales", "Business Development", "Technical Support"];

        if (!allowedTypes.includes(leadType)) {
            return res.status(400).json({
                success: false,
                message: "Invalid lead assignee type",
            });
        }

        // Duplicate email
        const existingLeadAssignee = await LeadAssignee.findOne({
            email: email.toLowerCase(),
        });

        if (existingLeadAssignee) {
            return res.status(409).json({
                success: false,
                message: "Lead assignee with this email already exists",
            });
        }

        // Create lead assignee
        const leadAssignee = await LeadAssignee.create({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            phone: phone.trim(),
            role: role.trim(),
            leadType,
        });

        return res.status(201).json({
            success: true,
            message: "Lead assignee created successfully",
            data: leadAssignee,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const listLeadAssignees = async (req, res) => {
    const {
        page = 1,
        limit = 10,
        sort = "-createdAt",
        search,
        leadType,
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
                { leadType: { $regex: search, $options: "i" } },
            ];
        }

        if (leadType) {
            filters.leadType = leadType;
        }

        if (role) {
            filters.role = role;
        }

        if (isActive !== undefined && isActive !== "" && isActive !== "all") {
            filters.isActive = isActive === "true" || isActive === true;
        }

        const leadAssignees = await LeadAssignee.find(filters)
            .sort(sort)
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        const total = await LeadAssignee.countDocuments(filters);

        return res.json(
            paginatedResponse({
                data: leadAssignees,
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
};

export const updateLeadAssignee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, role, leadType, isActive } = req.body;

        // Check if lead assignee exists
        const leadAssignee = await LeadAssignee.findById(id);

        if (!leadAssignee) {
            return res.status(404).json({
                success: false,
                message: "Lead assignee not found",
            });
        }

        // Check duplicate email
        if (email && email.toLowerCase() !== leadAssignee.email) {
            const existingLeadAssignee = await LeadAssignee.findOne({
                email: email.toLowerCase(),
                _id: { $ne: id },
            });

            if (existingLeadAssignee) {
                return res.status(409).json({
                    success: false,
                    message: "Email already exists",
                });
            }
        }

        // Update
        leadAssignee.name = name ?? leadAssignee.name;
        leadAssignee.email = email?.toLowerCase() ?? leadAssignee.email;
        leadAssignee.phone = phone ?? leadAssignee.phone;
        leadAssignee.role = role ?? leadAssignee.role;
        leadAssignee.leadType = leadType ?? leadAssignee.leadType;
        leadAssignee.isActive = isActive ?? leadAssignee.isActive;

        await leadAssignee.save();

        return res.status(200).json({
            success: true,
            message: "Lead assignee updated successfully",
            data: leadAssignee,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteLeadAssignee = async (req, res) => {
    try {
        const { id } = req.params;

        const leadAssignee = await LeadAssignee.findByIdAndDelete(id);

        if (!leadAssignee) {
            return res.status(404).json({
                success: false,
                message: "Lead assignee not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Lead assignee deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

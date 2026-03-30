import { ContactLead } from "../models/ContactLead.js";
import { paginatedResponse } from "../utils/apiResponse.js";

export const createContactLead = async (req, res) => {
  const lead = await ContactLead.create(req.body);
  return res.status(201).json(lead);
};

export const listContactLeads = async (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  const q = req.query.q;
  const sort = req.query.sort || "-createdAt";
  const query = {};

  if (q) {
    query.$or = [
      { name: { $regex: q, $options: "i" } },
      { email: { $regex: q, $options: "i" } },
      { subject: { $regex: q, $options: "i" } },
    ];
  }

  const [data, total] = await Promise.all([
    ContactLead.find(query).sort(sort).skip((page - 1) * limit).limit(limit),
    ContactLead.countDocuments(query),
  ]);

  return res.json(paginatedResponse({ data, total, page, limit }));
};

export const deleteContactLead = async (req, res) => {
  const lead = await ContactLead.findByIdAndDelete(req.params.id);
  if (!lead) return res.status(404).json({ message: "Lead not found" });
  return res.json({ message: "Lead deleted" });
};

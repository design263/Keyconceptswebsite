import { Admin } from "../models/Admin.js";
import { generateToken } from "../utils/generateToken.js";

export const registerAdmin = async (req, res) => {
  const { email, password, registrationKey } = req.body;

  if (process.env.ADMIN_REGISTRATION_KEY && registrationKey !== process.env.ADMIN_REGISTRATION_KEY) {
    return res.status(403).json({ message: "Invalid admin registration key" });
  }

  const existing = await Admin.findOne({ email: email.toLowerCase() });
  if (existing) {
    return res.status(409).json({ message: "Admin already exists" });
  }

  const admin = await Admin.create({
    email: email.toLowerCase(),
    password,
    role: "admin",
  });

  const token = generateToken({ id: admin._id, role: admin.role, email: admin.email });
  return res.status(201).json({
    token,
    admin: { id: admin._id, email: admin.email, role: admin.role },
  });
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email: email.toLowerCase() });

  if (!admin || !(await admin.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken({ id: admin._id, role: admin.role, email: admin.email });
  return res.json({
    token,
    admin: { id: admin._id, email: admin.email, role: admin.role },
  });
};

export const me = async (req, res) => {
  return res.json({ user: req.user });
};

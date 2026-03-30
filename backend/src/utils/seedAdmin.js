import "dotenv/config";
import { connectDB } from "../config/db.js";
import { Admin } from "../models/Admin.js";

const run = async () => {
  await connectDB();
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD required in .env");
  }

  const exists = await Admin.findOne({ email: email.toLowerCase() });
  if (exists) {
    console.log("Admin already exists");
    process.exit(0);
  }

  await Admin.create({ email, password, role: "admin" });
  console.log("Admin seeded");
  process.exit(0);
};

run();

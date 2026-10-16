import { Router } from "express";
import { body } from "express-validator";
import {
  addContactLeadActivity,
  assignContactLead,
  createContactLead,
  deleteContactLead,
  getContactLeadById,
  getContactLeadFilterOptions,
  listContactLeads,
  markContactLeadViewed,
  updateContactLead,
  updateContactLeadStatus,
} from "../controllers/contactController.js";
import { protect } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.post(
  "/",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("subject").notEmpty(),
    body("message").notEmpty(),
  ],
  validate,
  createContactLead
);

router.get("/", protect, listContactLeads);
router.get("/filter-options", protect, getContactLeadFilterOptions);
router.get("/:id", protect, getContactLeadById);
router.patch("/:id/status", protect, updateContactLeadStatus);
router.patch("/:id/assign", protect, assignContactLead);
router.post("/:id/activities", protect, addContactLeadActivity);
router.patch("/:id/details", protect, updateContactLead);
router.patch("/:id/viewed", protect, markContactLeadViewed);
router.delete("/:id", protect, deleteContactLead);

export default router;

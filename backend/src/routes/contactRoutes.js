import { Router } from "express";
import { body } from "express-validator";
import { createContactLead, deleteContactLead, listContactLeads } from "../controllers/contactController.js";
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
router.delete("/:id", protect, deleteContactLead);

export default router;

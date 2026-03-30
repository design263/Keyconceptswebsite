import { Router } from "express";
import { body } from "express-validator";
import { createJob, deleteJob, getJob, listJobs, updateJob } from "../controllers/jobController.js";
import { protect } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

const arrayOrString = (fieldName, required = false) =>
  body(fieldName)
    .if((_value, { req }) => required || req.body[fieldName] !== undefined)
    .custom((value) => Array.isArray(value) || typeof value === "string")
    .withMessage(`${fieldName} must be an array of strings or newline separated string`);

const jobValidation = [
  body("title").notEmpty(),
  body("department").notEmpty(),
  body("location").notEmpty(),
  body("description").notEmpty(),
  body("experience").notEmpty(),
  body("employmentType").notEmpty(),
  arrayOrString("requirements", true),
  arrayOrString("responsibilities", true),
  arrayOrString("niceToHave"),
  arrayOrString("benefits"),
  body("status").optional().isIn(["active", "inactive"]),
];

router.get("/", listJobs);
router.get("/:id", getJob);
router.post("/", protect, jobValidation, validate, createJob);
router.put("/:id", protect, jobValidation, validate, updateJob);
router.patch("/:id", protect, jobValidation.map((v) => v.optional()), validate, updateJob);
router.delete("/:id", protect, deleteJob);

export default router;

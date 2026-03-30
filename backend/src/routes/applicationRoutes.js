import { Router } from "express";
import { body } from "express-validator";
import { createApplication, deleteApplication, getResume, listApplications } from "../controllers/applicationController.js";
import { protect } from "../middlewares/auth.js";
import { uploadResume } from "../middlewares/upload.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.post(
  "/",
  uploadResume.single("resume"),
  [
    body("jobId").isMongoId(),
    body("fullName").notEmpty(),
    body("email").isEmail(),
    body("phone").notEmpty(),
    body("coverLetter").notEmpty(),
  ],
  validate,
  createApplication
);
router.get("/", protect, listApplications);
router.get("/resume/:fileName", protect, getResume);
router.delete("/:id", protect, deleteApplication);

export default router;

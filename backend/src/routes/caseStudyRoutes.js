import { Router } from "express";
import { body, param } from "express-validator";
import {
  createCaseStudy,
  deleteCaseStudy,
  getCaseStudy,
  getCaseStudyBySlug,
  listCaseStudies,
  updateCaseStudy,
} from "../controllers/caseStudyController.js";
import { protect } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

const metricsValidation = body("metrics")
  .optional()
  .custom((value) => {
    if (typeof value === "string" || Array.isArray(value)) return true;
    return false;
  })
  .withMessage("metrics must be an array of { label, value } objects or newline separated label:value pairs");

const caseStudyValidation = [
  body("title").notEmpty(),
  body("client").notEmpty(),
  body("industry").notEmpty(),
  body("challenge").notEmpty(),
  body("result").notEmpty(),
  body("slug").optional().isString(),
  body("image").optional().isString(),
  metricsValidation,
  body("featured").optional().isBoolean().toBoolean(),
  body("status").optional().isIn(["active", "inactive"]),
  body("publishedAt").optional({ nullable: true }).isISO8601(),
];

router.get("/", listCaseStudies);
router.get("/slug/:slug", getCaseStudyBySlug);
router.get("/:id", param("id").isMongoId(), validate, getCaseStudy);
router.post("/", protect, caseStudyValidation, validate, createCaseStudy);
router.put("/:id", protect, param("id").isMongoId(), ...caseStudyValidation, validate, updateCaseStudy);
router.patch(
  "/:id",
  protect,
  param("id").isMongoId(),
  ...caseStudyValidation.map((v) => v.optional()),
  validate,
  updateCaseStudy
);
router.delete("/:id", protect, param("id").isMongoId(), validate, deleteCaseStudy);

export default router;

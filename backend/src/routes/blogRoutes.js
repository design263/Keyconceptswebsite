import { Router } from "express";
import { body, param } from "express-validator";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogBySlug,
  listBlogs,
  updateBlog,
} from "../controllers/blogController.js";
import { protect } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

const arrayOrString = (fieldName, required = false) =>
  body(fieldName)
    .if((_value, { req }) => required || req.body[fieldName] !== undefined)
    .custom((value) => Array.isArray(value) || typeof value === "string")
    .withMessage(`${fieldName} must be an array of strings or comma/newline separated string`);

const blogValidation = [
  body("title").notEmpty(),
  body("excerpt").notEmpty(),
  body("contentHtml").notEmpty(),
  body("slug").optional().isString(),
  body("image").optional().isString(),
  body("category").optional().isString(),
  body("author").optional().isString(),
  body("readTime").optional().isString(),
  arrayOrString("tags"),
  body("featured").optional().isBoolean().toBoolean(),
  body("status").optional().isIn(["active", "inactive"]),
  body("publishedAt").optional({ nullable: true }).isISO8601(),
];

router.get("/", listBlogs);
router.get("/slug/:slug", getBlogBySlug);
router.get("/:id", param("id").isMongoId(), validate, getBlog);
router.post("/", protect, blogValidation, validate, createBlog);
router.put("/:id", protect, param("id").isMongoId(), ...blogValidation, validate, updateBlog);
router.patch("/:id", protect, param("id").isMongoId(), ...blogValidation.map((v) => v.optional()), validate, updateBlog);
router.delete("/:id", protect, param("id").isMongoId(), validate, deleteBlog);

export default router;

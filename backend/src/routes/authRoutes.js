import { Router } from "express";
import { body } from "express-validator";
import { loginAdmin, me, registerAdmin } from "../controllers/authController.js";
import { protect } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("registrationKey").optional().isString(),
  ],
  validate,
  registerAdmin
);

router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  validate,
  loginAdmin
);

router.get("/me", protect, me);

export default router;

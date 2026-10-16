import { Router } from "express";
import { body } from "express-validator";
import { protect } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { createInterviewer, deleteInterviewer, listInterviewers, updateInterviewer } from "../controllers/interviewerController.js";

const router = Router();

router.post(
    "/interviewer/create",
    [
        body("name").notEmpty(),
        body("email").isEmail(),
        body("phone").notEmpty(),
        body("role").notEmpty(),
    ],
    validate,
    createInterviewer
);
router.post(
    "/interviewer/update/:id",
    protect,
    validate,
    updateInterviewer
);
router.get("/interviewer/", protect, listInterviewers);
router.delete("/interviewer/delete/:id", protect, deleteInterviewer);

export default router;

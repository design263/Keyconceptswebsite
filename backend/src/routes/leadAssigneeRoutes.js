import { Router } from "express";
import { body } from "express-validator";
import { protect } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import {
    createLeadAssignee,
    deleteLeadAssignee,
    listLeadAssignees,
    updateLeadAssignee,
} from "../controllers/leadAssigneeController.js";

const router = Router();

router.post(
    "/lead-assignee/create",
    [
        body("name").notEmpty(),
        body("email").isEmail(),
        body("phone").notEmpty(),
        body("role").notEmpty(),
    ],
    validate,
    createLeadAssignee
);
router.post(
    "/lead-assignee/update/:id",
    protect,
    validate,
    updateLeadAssignee
);
router.get("/lead-assignee/", protect, listLeadAssignees);
router.delete("/lead-assignee/delete/:id", protect, deleteLeadAssignee);

export default router;

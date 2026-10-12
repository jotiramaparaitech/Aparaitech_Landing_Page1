// server/routes/AuthRoutes.js
import express from "express";
import { loginAdmin, getMe, setupInitialAdmin } from "../controllers/authController.js";
import { protectAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/me", protectAdmin, getMe);
router.post("/setup", setupInitialAdmin);

export default router;

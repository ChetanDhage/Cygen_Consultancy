import express from "express";
import {
  register,
  registerConsultant,
  login,
  verifyEmail,
} from "../controllers/auth.controller.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Regular user registration
router.post("/register", register);

// Consultant registration with file uploads
router.post(
  "/register/consultant",
  upload.fields([
    { name: "profilePhoto", maxCount: 1 },
    { name: "resume", maxCount: 1 },
    { name: "certifications", maxCount: 10 },
  ]),
  registerConsultant
);

// Login
router.post("/login", login);

// Email verification
router.get("/verify/:token", verifyEmail);

export default router;

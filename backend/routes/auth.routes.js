import express from "express";
import {
  register,
  registerConsultant,
  login,
  verifyEmail,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controller.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/register", register);
router.post(
  "/register/consultant",
  upload.fields([
    { name: "profilePhoto", maxCount: 1 },
    { name: "resume", maxCount: 1 },
    { name: "certifications", maxCount: 5 },
  ]),
  registerConsultant
);
router.post("/login", login);
router.get("/verify/:token", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password/:token", resetPassword);

export default router;

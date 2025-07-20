import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { handleFileUpload } from "../middleware/upload.js";

const router = express.Router();

// Consultant registration route
router.post(
  "/signup/consultant",
  handleFileUpload(["avatar", "resume", "certificationFiles"]),
  register
);

// Login route
router.post("/login", login);

export default router;

// routes/consultant.routes.js
import express from "express";
import {
  updateConsultantProfile,
  removeCertification,
  getConsultantProfile,
} from "../controllers/consultant.controller.js";
import { protect, consultant } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.use(protect, consultant);

// Get consultant profile
router.get("/profile", getConsultantProfile);

// Update consultant profile
router.put(
  "/profile",
  upload.array("certifications", 5),
  updateConsultantProfile
);

// Remove certification
router.delete("/certifications/:certificationId", removeCertification);

export default router;

import express from "express";
import {
  updateConsultantProfile,
  getConsultantProfile,
  removeCertification,
} from "../controllers/consultant.controller.js";
import { protect, consultant } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Apply authentication and consultant role middleware
// router.use(protect, consultant);

// Get consultant profile
router.get("/profile", getConsultantProfile);



// Get consultant profile by ID
router.get("/profile/:consultant_id", getConsultantProfile);



// Update consultant profile
router.put(
  "/profile",
  upload.fields([
    { name: "profilePhoto", maxCount: 1 },
    { name: "resume", maxCount: 1 },
    { name: "certifications", maxCount: 10 },
  ]),
  updateConsultantProfile
);

// Remove certification
router.delete("/certifications/:id", removeCertification);

export default router;

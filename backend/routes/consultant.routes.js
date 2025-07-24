import express from "express";
import {
  getProfile,
  updateProfile,
  updateCertifications,
  updateAvailability,
} from "../controllers/consultant.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.use(auth);

router.get("/profile/:id", getProfile);
router.put("/profile/:id", updateProfile);
router.put("/certifications/:id", updateCertifications);
router.put("/availability/:id", updateAvailability);

export default router;

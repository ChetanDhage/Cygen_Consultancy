import express from "express";
import {
  getDashboardOverview,
  getPendingVerifications,
  reviewVerification,
  getFlaggedSessions,
  reviewFlaggedSession,
  getDomainAnalytics,
  updateSubAdminProfile,
} from "../controllers/subAdminController.js";
import { protect } from "../middleware/auth.js";
import subAdmin from "../middleware/subAdmin.js";

const router = express.Router();

router.use(protect);
router.use(subAdmin);

router.get("/dashboard", getDashboardOverview);
router.get("/verifications", getPendingVerifications);
router.put("/verifications/:id", reviewVerification);
router.get("/moderations", getFlaggedSessions);
router.put("/moderations/:id", reviewFlaggedSession);
router.get("/analytics", getDomainAnalytics);
router.put("/profile", updateSubAdminProfile);

export default router;

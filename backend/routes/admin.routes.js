import express from "express";
import admin from "../middleware/admin.js";
import {
  getConsultants,
  updateConsultantStatus,
  getCustomers,
  getTransactions,
  getVerifications,
  updateVerificationStatus,
  getAnalytics,
  getConsultantsByStatus,
} from "../controllers/admin.controller.js";

const router = express.Router();

// Apply admin middleware to all routes
// router.use(admin);

// Consultant management
router.get("/consultants", getConsultants);
router.get("/verified-consultant", getConsultantsByStatus);
router.put("/consultants/:id/status", updateConsultantStatus);

// Customer management
router.get("/customers", getCustomers);

// Transaction management
router.get("/transactions", getTransactions);

// Verification management
router.get("/verifications", getVerifications);
router.put("/verifications/:id/status", updateVerificationStatus);

// Analytics
router.get("/analytics", getAnalytics);

export default router;

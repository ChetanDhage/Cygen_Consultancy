import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  getConsultants,
  getConsultantById,
  getConsultantsByDomain,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import subAdmin from "../middleware/subAdmin.js";

const router = express.Router();

// Public routes (none in this case)

// Protected routes
router.use(protect);

router.route("/profile").get(getUserProfile).put(updateUserProfile);

router.route("/consultants").get(getConsultants);

router.route("/consultants/:id").get(getConsultantById);

// Sub-admin specific route
router
  .route("/consultants/domain/:domain")
  .get(subAdmin, getConsultantsByDomain);

export default router;

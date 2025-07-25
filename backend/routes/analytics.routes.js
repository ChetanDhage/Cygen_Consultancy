import express from "express";
import { getConsultantAnalyticsData } from "../controllers/analytics.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.use(auth);

router.get("/", getConsultantAnalyticsData);

export default router;

import express from "express";
import { getDashboardStatistics } from "../controllers/dashboard.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.use(auth);

router.get("/", getDashboardStatistics);

export default router;

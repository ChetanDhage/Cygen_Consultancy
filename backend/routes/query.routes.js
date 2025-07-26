import express from "express";
import {
  getConsultantQueries,
  updateQueryStatus,
} from "../controllers/query.controller.js";
import { protect, consultant } from "../middleware/auth.js";

const router = express.Router();

router.use(protect, consultant);

router.get("/", getConsultantQueries);
router.put("/:id", updateQueryStatus);

export default router;

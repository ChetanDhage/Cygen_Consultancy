import express from "express";
import {
  getQueries,
  getQueryDetails,
  updateQueryStatus,
} from "../controllers/query.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.use(auth);

router.get("/", getQueries);
router.get("/:id", getQueryDetails);
router.put("/:id/status", updateQueryStatus);

export default router;

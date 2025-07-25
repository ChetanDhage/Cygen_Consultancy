import express from "express";
import {
  getTransactions,
  getEarningsSummary,
  requestPayout,
} from "../controllers/payment.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.use(auth);

router.get("/transactions", getTransactions);
router.get("/earnings", getEarningsSummary);
router.post("/payout", requestPayout);

export default router;

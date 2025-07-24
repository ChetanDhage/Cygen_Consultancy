import Transaction from "../models/Transaction.js";
import Session from "../models/Session.js";
import Consultant from "../models/Consultant.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      consultantId: req.consultant._id,
    })
      .sort({ createdAt: -1 })
      .populate("sessionId");

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEarningsSummary = async (req, res) => {
  try {
    const consultant = await Consultant.findById(req.consultant._id);

    if (!consultant) {
      return res.status(404).json({ error: "Consultant not found" });
    }

    res.json({
      total: consultant.earnings.total,
      available: consultant.earnings.available,
      pending: consultant.earnings.pending,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const requestPayout = async (req, res) => {
  try {
    const { amount } = req.body;
    const consultant = await Consultant.findById(req.consultant._id);

    if (!consultant) {
      return res.status(404).json({ error: "Consultant not found" });
    }

    if (amount > consultant.earnings.available) {
      return res.status(400).json({ error: "Insufficient funds" });
    }

    // Create payout transaction
    const transaction = new Transaction({
      consultantId: req.consultant._id,
      amount: -amount,
      description: "Payout request",
      status: "pending",
    });

    await transaction.save();

    // Update consultant earnings
    consultant.earnings.available -= amount;
    await consultant.save();

    res.json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

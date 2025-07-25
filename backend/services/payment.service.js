import Transaction from "../models/Transaction.js";
import Consultant from "../models/Consultant.js";

export const recordPayment = async (consultantId, sessionId, amount) => {
  const transaction = await Transaction.create({
    consultantId,
    sessionId,
    amount,
    status: "paid",
  });

  await Consultant.findByIdAndUpdate(consultantId, {
    $inc: {
      "earnings.total": amount,
      "earnings.available": amount,
    },
  });

  return transaction;
};

export const getPaymentHistory = async (consultantId) => {
  return await Transaction.find({ consultantId })
    .sort({ createdAt: -1 })
    .populate("sessionId", "title startTime");
};

export const requestWithdrawal = async (consultantId, amount) => {
  const consultant = await Consultant.findById(consultantId);

  if (consultant.earnings.available < amount) {
    throw new Error("Insufficient available balance");
  }

  const transaction = await Transaction.create({
    consultantId,
    amount: -amount,
    status: "pending",
    description: "Withdrawal request",
  });

  await Consultant.findByIdAndUpdate(consultantId, {
    $inc: {
      "earnings.available": -amount,
      "earnings.pending": amount,
    },
  });

  return transaction;
};

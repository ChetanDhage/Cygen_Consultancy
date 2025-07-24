import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  consultantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Consultant",
    required: true,
  },
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: "Session" },
  amount: { type: Number, required: true },
  description: String,
  status: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;

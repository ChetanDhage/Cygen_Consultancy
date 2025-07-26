import mongoose from "mongoose";

const querySchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    consultant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subject: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["new", "accepted", "rejected", "completed"],
      default: "new",
    },
    feeProposed: Number,
    documents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Document",
      },
    ],
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Query", querySchema);

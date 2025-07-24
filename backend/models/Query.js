import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  consultantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Consultant",
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true },
  description: String,
  proposedFee: Number,
  duration: Number, // in minutes
  attachments: [String],
  status: {
    type: String,
    enum: ["new", "accepted", "rejected", "pending"],
    default: "new",
  },
  createdAt: { type: Date, default: Date.now },
});

const Query = mongoose.model("Query", querySchema);
export default Query;

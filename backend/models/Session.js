import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    consultant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled", "flagged", "escalated"], // Added new statuses
      default: "scheduled",
    },
    type: {
      type: String,
      enum: ["video", "audio", "chat"],
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "refunded"],
      default: "pending",
    },
    meetingLink: String,
    notes: String,
    documents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Document",
      },
    ],
    followUpSessions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
      },
    ],
    // New fields for moderation
    domain: {
      type: String,
      enum: [
        "Cloud Security",
        "Network Security",
        "AI Threat Analysis",
        "Data Protection",
      ],
    },
    flaggedReason: String,
    flaggedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    flaggedAt: Date,
    messages: [
      {
        sender: {
          type: String,
          enum: ["consultant", "customer"],
        },
        content: String,
        timestamp: Date,
        flagged: Boolean,
      },
    ],
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    feedback: String,
  },
  { timestamps: true }
);

export default mongoose.model("Session", sessionSchema);

import mongoose from "mongoose";
import { QUERY_STATUS, SESSION_TYPES } from "../config/constants.js";

const querySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    consultant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Consultant",
      required: true,
    },
    queryText: {
      type: String,
      required: true,
    },
    files: [
      {
        name: String,
        url: String,
        publicId: String,
      },
    ],
    communicationMethod: {
      type: String,
      enum: SESSION_TYPES,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(QUERY_STATUS),
      default: QUERY_STATUS.PENDING,
    },
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Query", querySchema);

import Session from "../models/Session.js";
import Query from "../models/Query.js";
import Transaction from "../models/Transaction.js";
import mongoose from "mongoose";

export const getConsultantAnalytics = async (
  consultantId,
  timeframe = "month"
) => {
  const dateFilter = {};
  const now = new Date();

  if (timeframe === "week") {
    dateFilter.$gte = new Date(now.setDate(now.getDate() - 7));
  } else if (timeframe === "month") {
    dateFilter.$gte = new Date(now.setMonth(now.getMonth() - 1));
  } else if (timeframe === "year") {
    dateFilter.$gte = new Date(now.setFullYear(now.getFullYear() - 1));
  }

  const [sessions, queries, earnings] = await Promise.all([
    Session.countDocuments({
      consultantId: new mongoose.Types.ObjectId(consultantId),
      createdAt: dateFilter,
    }),
    Query.countDocuments({
      consultantId: new mongoose.Types.ObjectId(consultantId),
      createdAt: dateFilter,
    }),
    Transaction.aggregate([
      {
        $match: {
          consultantId: new mongoose.Types.ObjectId(consultantId),
          amount: { $gt: 0 },
          createdAt: dateFilter,
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]),
  ]);

  return {
    sessions: sessions || 0,
    queries: queries || 0,
    earnings: earnings[0]?.total || 0,
    timeframe,
  };
};

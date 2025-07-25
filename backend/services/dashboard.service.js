import Session from "../models/Session.js";
import Query from "../models/Query.js";
import Consultant from "../models/Consultant.js";

export const getDashboardStats = async (consultantId) => {
  const [upcomingSessions, newQueries, consultant] = await Promise.all([
    Session.countDocuments({
      consultantId,
      startTime: { $gte: new Date() },
      status: "scheduled",
    }),
    Query.countDocuments({
      consultantId,
      status: "new",
      createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
    }),
    Consultant.findById(consultantId).select("earnings"),
  ]);

  return {
    upcomingSessions: upcomingSessions || 0,
    newQueries: newQueries || 0,
    earnings: consultant?.earnings || {
      total: 0,
      available: 0,
      pending: 0,
    },
  };
};

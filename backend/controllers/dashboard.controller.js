import { getDashboardStats } from "../services/dashboard.service.js";

export const getDashboardStatistics = async (req, res) => {
  try {
    const stats = await getDashboardStats(req.consultant._id);
    res.json(stats);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch dashboard statistics",
      details: error.message,
    });
  }
};

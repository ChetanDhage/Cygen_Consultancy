import { getConsultantAnalytics as getAnalyticsService } from "../services/analytics.service.js";

export const getConsultantAnalyticsData = async (req, res) => {
  try {
    const analytics = await getAnalyticsService(
      req.consultant._id,
      req.query.timeframe
    );
    res.json(analytics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

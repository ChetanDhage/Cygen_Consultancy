import Consultant from "../models/Consultant.js";

export const getConsultantProfile = async (consultantId) => {
  return await Consultant.findById(consultantId);
};

export const updateConsultantProfile = async (consultantId, updateData) => {
  return await Consultant.findByIdAndUpdate(consultantId, updateData, {
    new: true,
    runValidators: true,
  });
};

export const updateAvailabilityStatus = async (consultantId, status) => {
  return await Consultant.findByIdAndUpdate(
    consultantId,
    { availability: status },
    { new: true }
  );
};

export const getConsultantDashboardStats = async (consultantId) => {
  const [sessionsCount, queriesCount, earnings] = await Promise.all([
    Session.countDocuments({ consultantId, status: "scheduled" }),
    Query.countDocuments({ consultantId, status: "new" }),
    Consultant.findById(consultantId).select("earnings"),
  ]);

  return {
    upcomingSessions: sessionsCount,
    newQueries: queriesCount,
    earnings: earnings,
  };
};

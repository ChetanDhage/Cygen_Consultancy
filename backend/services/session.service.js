import Session from "../models/Session.js";

export const createConsultantSession = async (consultantId, sessionData) => {
  return await Session.create({
    ...sessionData,
    consultantId,
  });
};

export const getConsultantSessions = async (consultantId, filters = {}) => {
  return await Session.find({ consultantId, ...filters })
    .sort({ startTime: 1 })
    .populate("clientId", "email fullName");
};

export const updateSessionStatus = async (sessionId, status) => {
  return await Session.findByIdAndUpdate(sessionId, { status }, { new: true });
};

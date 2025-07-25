import Query from "../models/Query.js";

export const getConsultantQueries = async (consultantId, status) => {
  const filter = { consultantId };
  if (status) filter.status = status;

  return await Query.find(filter)
    .sort({ createdAt: -1 })
    .populate("clientId", "email fullName");
};

export const updateQueryStatus = async (queryId, status) => {
  return await Query.findByIdAndUpdate(queryId, { status }, { new: true });
};

export const createFollowUpSession = async (queryId, sessionData) => {
  const query = await Query.findById(queryId);
  if (!query) throw new Error("Query not found");

  return await Session.create({
    ...sessionData,
    consultantId: query.consultantId,
    clientId: query.clientId,
    title: `Follow-up: ${query.title}`,
  });
};

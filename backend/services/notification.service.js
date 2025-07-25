import Notification from "../models/Notification.js";

export const createNotification = async (consultantId, data) => {
  return await Notification.create({
    consultantId,
    ...data,
  });
};

export const getConsultantNotifications = async (consultantId, readStatus) => {
  const filter = { consultantId };
  if (readStatus !== undefined) filter.read = readStatus;

  return await Notification.find(filter).sort({ createdAt: -1 }).limit(50);
};

export const markNotificationsAsRead = async (
  consultantId,
  notificationIds
) => {
  return await Notification.updateMany(
    {
      consultantId,
      _id: { $in: notificationIds },
    },
    { $set: { read: true } }
  );
};

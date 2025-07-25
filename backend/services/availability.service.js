import Consultant from '../models/Consultant.js';

export const updateAvailability = async (consultantId, availability) => {
  return await Consultant.findByIdAndUpdate(
    consultantId,
    { availability },
    { new: true }
  );
};

export const getAvailabilitySlots = async (consultantId) => {
  const consultant = await Consultant.findById(consultantId)
    .select('availabilitySlots');
  return consultant.availabilitySlots || [];
};

export const setAvailabilitySlots = async (consultantId, slots) => {
  return await Consultant.findByIdAndUpdate(
    consultantId,
    { availabilitySlots: slots },
    { new: true }
  );
};

export const getConsultantAvailability = async (consultantId) => {
  return await Consultant.findById(consultantId)
    .select('availability availabilitySlots');
};
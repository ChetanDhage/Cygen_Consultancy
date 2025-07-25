import {
  updateAvailability,
  getAvailabilitySlots as getSlotsService,
  setAvailabilitySlots as setSlotsService,
} from "../services/availability.service.js";

export const updateAvailabilityStatus = async (req, res) => {
  try {
    const consultant = await updateAvailability(
      req.consultant._id,
      req.body.availability
    );
    res.json(consultant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAvailabilitySlots = async (req, res) => {
  try {
    const slots = await getSlotsService(req.consultant._id);
    res.json(slots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const setAvailabilitySlots = async (req, res) => {
  try {
    const consultant = await setSlotsService(
      req.consultant._id,
      req.body.slots
    );
    res.json(consultant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

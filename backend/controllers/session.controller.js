import Session from "../models/Session.js";

export const createSession = async (req, res) => {
  try {
    const session = new Session({
      ...req.body,
      consultantId: req.consultant._id,
    });

    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({
      consultantId: req.consultant._id,
    }).sort({ startTime: -1 });

    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSessionDetails = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    res.json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    res.json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

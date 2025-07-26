import Session from "../models/Session.js";
import { notFoundError } from "../utils/helpers.js";

// Get consultant sessions
export const getConsultantSessions = async (req, res, next) => {
  try {
    const sessions = await Session.find({ consultant: req.user._id })
      .populate("customer", "name email")
      .sort({ date: -1 });

    res.json(sessions);
  } catch (error) {
    next(error);
  }
};

// Get session details
export const getSessionDetails = async (req, res, next) => {
  try {
    const session = await Session.findById(req.params.id)
      .populate("customer", "name email")
      .populate("documents")
      .populate("followUpSessions");

    if (!session) {
      return notFoundError("Session not found", res);
    }

    res.json(session);
  } catch (error) {
    next(error);
  }
};

// Create follow-up session
export const createFollowUpSession = async (req, res, next) => {
  try {
    const { parentSessionId, date, duration, type, fee } = req.body;

    const parentSession = await Session.findById(parentSessionId);
    if (!parentSession) {
      return notFoundError("Parent session not found", res);
    }

    const followUpSession = new Session({
      consultant: parentSession.consultant,
      customer: parentSession.customer,
      date,
      duration,
      type,
      fee,
      status: "scheduled",
    });

    await followUpSession.save();

    parentSession.followUpSessions.push(followUpSession._id);
    await parentSession.save();

    res.status(201).json(followUpSession);
  } catch (error) {
    next(error);
  }
};

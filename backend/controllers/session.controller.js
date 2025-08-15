import Session from "../models/Session.js";
import Query from "../models/Query.js"; // Add this import
import { notFoundError } from "../utils/helpers.js";

// Get consultant sessions
export const getConsultantSessions = async (req, res, next) => {
  try {
    const { status } = req.query;
    const filter = { consultant: req.user.consultantProfile || req.user._id };

    if (status) {
      filter.status = status;
    }

    const sessions = await Session.find(filter)
      .populate("customer", "name email designation company")
      .sort({ date: -1 });

    res.json({
      success: true,
      count: sessions.length,
      data: sessions,
    });
  } catch (error) {
    next(error);
  }
};

// Get session details
export const getSessionDetails = async (req, res, next) => {
  try {
    const session = await Session.findById(req.params.id)
      .populate("customer", "name email designation company")
      .populate({
        path: "query",
        select: "querySub queryText files",
        populate: {
          path: "user",
          select: "name",
        },
      })
      .populate("followUpSessions");

    if (!session) {
      return notFoundError("Session not found", res);
    }

    res.json({
      success: true,
      data: session,
    });
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
      parentSession: parentSessionId,
    });

    await followUpSession.save();

    parentSession.followUpSessions.push(followUpSession._id);
    await parentSession.save();

    res.status(201).json({
      success: true,
      data: followUpSession,
    });
  } catch (error) {
    next(error);
  }
};

// Add session documents
export const addSessionDocument = async (req, res, next) => {
  try {
    const { sessionId } = req.params;
    const session = await Session.findById(sessionId);

    if (!session) {
      return notFoundError("Session not found", res);
    }

    // Process file upload (local storage)
    if (req.file) {
      session.documents.push({
        name: req.file.originalname,
        url: `/uploads/${req.file.filename}`,
      });
      await session.save();
    }

    res.json({
      success: true,
      data: session,
    });
  } catch (error) {
    next(error);
  }
};

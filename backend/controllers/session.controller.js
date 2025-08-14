import Session from "../models/Session.js";
import Query from "../models/Query.js"; // Add this import
import { notFoundError } from "../utils/helpers.js";

// Get consultant sessions
export const getConsultantSessions = async (req, res, next) => {
  try {
    const { status } = req.query;
    const filter = { consultant: req.user._id };

    if (status) {
      filter.status = status;
    }

    const sessions = await Session.find(filter)
      .populate("customer", "name email designation company") // Added designation and company
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
      .populate("customer", "name email designation company") // Added designation and company
      .populate({
        path: "query",
        select: "querySub queryText files", // Populate query details
        populate: {
          path: "user",
          select: "name",
        },
      })
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
      parentSession: parentSessionId, // Track parent session
    });

    await followUpSession.save();

    parentSession.followUpSessions.push(followUpSession._id);
    await parentSession.save();

    res.status(201).json(followUpSession);
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

    // Process file upload
    if (req.file) {
      const result = await uploadToCloudinary(req.file.path);
      session.documents.push({
        name: req.file.originalname,
        url: result.secure_url,
        publicId: result.public_id,
      });

      await session.save();
    }

    res.json(session);
  } catch (error) {
    next(error);
  }
};

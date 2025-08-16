import Session from "../models/Session.js";
import Query from "../models/Query.js";
import { notFoundError } from "../utils/helpers.js";

// Get consultant sessions (only with accepted queries + today's filter support)
export const getConsultantSessions = async (req, res, next) => {
  try {
    const { status, today } = req.query;
    const filter = { consultant: req.user.consultantProfile || req.user._id };

    // Status filter if provided
    if (status) {
      filter.status = status;
    }

    // Today's date filter
    if (today === "true") {
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      filter.date = { $gte: startOfDay, $lte: endOfDay };
    }

    // 🔹 Step 1: find all accepted queries
    const acceptedQueries = await Query.find({ status: "accepted" }).select(
      "_id"
    );

    // 🔹 Step 2: filter sessions only with those queries
    filter.query = { $in: acceptedQueries.map((q) => q._id) };

    // Fetch sessions
    const sessions = await Session.find(filter)
      .populate("customer", "name email designation company")
      .populate("query", "querySub queryText status")
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

// Get session details (only if belongs to logged-in consultant AND query is accepted)
export const getSessionDetails = async (req, res, next) => {
  try {
    const session = await Session.findOne({
      _id: req.params.id,
      consultant: req.user.consultantProfile || req.user._id,
    })
      .populate("customer", "name email designation company")
      .populate({
        path: "query",
        match: { status: "accepted" }, // 🔹 only accepted queries
        select: "querySub queryText files status",
        populate: {
          path: "user",
          select: "name",
        },
      })
      .populate("followUpSessions");

    if (!session || !session.query) {
      return notFoundError("Session not found or query not accepted", res);
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

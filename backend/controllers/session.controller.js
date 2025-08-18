import Session from "../models/Session.js";
import Query from "../models/Query.js";
import { notFoundError } from "../utils/helpers.js";

export const getConsultantSessions = async (req, res, next) => {
  try {
    const consultantId = req.user.consultantProfile || req.user._id;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // start of today
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // start of next day

    // 🔹 Fetch all consultant sessions
    const sessions = await Query.find({ consultant: consultantId, status: "accepted" })
      .populate("user", "name email designation company") // ✅ user instead of customer
      .populate("consultant", "name email")              // optional
      .populate("followUpSessions")                      // if it exists
      .sort({ sessionDateTime: 1 });

    if (!sessions || sessions.length === 0) {
      return res.status(404).json({ message: "No sessions found for this consultant" });
    }

    // 🔹 Categorize sessions
    const todaySessions = sessions.filter(
      (s) => s.sessionDateTime >= today && s.sessionDateTime < tomorrow
    );

    const upcomingSessions = sessions.filter(
      (s) => s.sessionDateTime >= tomorrow
    );

    const missedSessions = sessions.filter(
      (s) => s.sessionDateTime < today
    );

    res.json({
      success: true,
      today: todaySessions,
      upcoming: upcomingSessions,
      missed: missedSessions,
      totals: {
        today: todaySessions.length,
        upcoming: upcomingSessions.length,
        missed: missedSessions.length,
        overall: sessions.length
      }
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

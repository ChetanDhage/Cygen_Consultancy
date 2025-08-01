import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

// Protect routes
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
  req.user = await User.findById(decoded.id).select(
    "-password -verificationToken -resetPasswordToken -resetPasswordExpire"
  );
});

// Role-based middleware
export const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as an admin");
  }
};

export const consultant = (req, res, next) => {
  if (req.user && req.user.role === "consultant") {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as a consultant");
  }
};

export const subAdmin = (req, res, next) => {
  if (req.user && req.user.role === "sub-admin") {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as a sub-admin");
  }
};

export const user = (req, res, next) => {
  if (req.user && req.user.role === "user") {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as a user");
  }
};

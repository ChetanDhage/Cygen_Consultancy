import asyncHandler from "express-async-handler";

const subAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === "sub-admin") {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as a sub-admin");
  }
});

export default subAdmin;

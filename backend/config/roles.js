export const ROLES = {
  USER: "user",
  CONSULTANT: "consultant",
  ADMIN: "admin",
};

export const checkRole = (requiredRoles) => {
  return (req, res, next) => {
    if (!requiredRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: "Forbidden: Insufficient permissions" });
    }
    next();
  };
};

import { body, validationResult } from "express-validator";

export const validateConsultantRegistration = [
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 6 }),
  body("fullName").notEmpty(),
  body("contactNumber").isMobilePhone(),
  body("designation").notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

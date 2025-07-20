import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Consultant from "../models/Consultant.js";
import { USER_ROLES, ACCOUNT_STATUS } from "../config/constants.js";

// Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Register new consultant
export const registerConsultant = async (userData, files) => {
  // Check if user exists
  const userExists = await User.findOne({ email: userData.email });
  if (userExists) {
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  // Create user
  const user = await User.create({
    email: userData.email,
    password: hashedPassword,
    role: USER_ROLES.CONSULTANT,
  });

  // Create consultant profile
  const consultantData = {
    ...userData,
    userId: user._id,
    avatar: files.avatar?.[0]?.path,
    resume: files.resume?.[0]?.path,
    certifications: files.certifications?.map((file, index) => ({
      name: userData.certificationNames[index],
      file: file.path,
    })),
  };

  delete consultantData.password;
  delete consultantData.certificationNames;

  await Consultant.create(consultantData);

  return {
    id: user._id,
    email: user.email,
    role: user.role,
    status: user.status,
  };
};

// Authenticate user
export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  if (user.status !== ACCOUNT_STATUS.APPROVED) {
    throw new Error("Account not approved");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return {
    id: user._id,
    email: user.email,
    role: user.role,
    token: generateToken(user._id, user.role),
  };
};

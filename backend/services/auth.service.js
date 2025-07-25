import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Consultant from "../models/Consultant.js";
import { ROLES } from "../config/roles.js";

const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const registerConsultant = async (userData, files) => {
  // Check if user exists
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("Email already registered");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  // Create user
  const user = await User.create({
    email: userData.email,
    password: hashedPassword,
    role: ROLES.CONSULTANT,
  });

  // Create consultant profile
  const consultant = await Consultant.create({
    userId: user._id,
    fullName: userData.fullName,
    contactNumber: userData.contactNumber,
    designation: userData.designation,
    industry: userData.industry,
    skills: userData.skills,
    fee: userData.fee,
    about: userData.about,
    avatar: files.avatar?.[0]?.path,
    resume: files.resume?.[0]?.path,
    certifications: files.certifications?.map((file, index) => ({
      name: userData.certificationNames[index],
      file: file.path,
    })),
  });

  return {
    id: user._id,
    email: user.email,
    role: user.role,
    token: generateToken(user._id, user.role),
    consultantId: consultant._id,
  };
};

export const loginConsultant = async (email, password) => {
  const user = await User.findOne({ email, role: ROLES.CONSULTANT });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const consultant = await Consultant.findOne({ userId: user._id });
  if (!consultant) {
    throw new Error("Consultant profile not found");
  }

  return {
    id: user._id,
    email: user.email,
    role: user.role,
    consultantId: consultant._id,
    token: generateToken(user._id, user.role),
  };
};

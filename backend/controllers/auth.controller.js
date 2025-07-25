import User from "../models/User.js";
import Consultant from "../models/Consultant.js";
import {
  registerConsultant,
  loginConsultant,
} from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const result = await registerConsultant(req.body, req.files);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginConsultant(email, password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

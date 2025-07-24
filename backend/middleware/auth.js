import jwt from "jsonwebtoken";
import Consultant from "../models/Consultant.js";

export const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const consultant = await Consultant.findOne({
      _id: decoded.id,
      "tokens.token": token,
    });

    if (!consultant) {
      throw new Error("Consultant not found");
    }

    req.token = token;
    req.consultant = consultant;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

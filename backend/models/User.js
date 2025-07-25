import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "consultant", "admin"],
      default: "consultant",
    },
    tokens: [
      {
        token: { type: String, required: true },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Add methods to user schema
userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign(
    { _id: this._id, role: this.role },
    process.env.JWT_SECRET
  );
  this.tokens = this.tokens.concat({ token });
  await this.save();
  return token;
};

const User = mongoose.model("User", userSchema);
export default User;

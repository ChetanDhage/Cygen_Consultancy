import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendVerificationEmail = async (user, token, req) => {
  const verificationUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/auth/verify/${token}`;

  const mailOptions = {
    from: `"Worklify Support" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: "Verify Your Email Address",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Welcome to Worklify!</h2>
        <p>Thank you for registering as a ${user.role}.</p>
        <p>Please click the button below to verify your email address:</p>
        <a href="${verificationUrl}" 
           style="display: inline-block; padding: 10px 20px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0;">
          Verify Email
        </a>
        <p>If you didn't create an account with us, please ignore this email.</p>
        <p style="margin-top: 30px; color: #6b7280;">Worklify Team</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (user, token, req) => {
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/auth/reset-password/${token}`;

  const mailOptions = {
    from: `"Worklify Support" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: "Password Reset Request",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Password Reset</h2>
        <p>You requested a password reset for your Worklify account.</p>
        <p>Click the button below to reset your password:</p>
        <a href="${resetUrl}" 
           style="display: inline-block; padding: 10px 20px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0;">
          Reset Password
        </a>
        <p>This link will expire in 30 minutes.</p>
        <p>If you didn't request this, please ignore this email.</p>
        <p style="margin-top: 30px; color: #6b7280;">Worklify Team</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendConsultantApprovalEmail = async (user) => {
  const mailOptions = {
    from: `"Worklify Support" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: "Your Consultant Profile Has Been Approved",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Congratulations!</h2>
        <p>Your consultant profile has been approved by our team.</p>
        <p>You can now start accepting sessions from clients.</p>
        <a href="${process.env.CLIENT_URL}/dashboard" 
           style="display: inline-block; padding: 10px 20px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0;">
          Go to Dashboard
        </a>
        <p style="margin-top: 30px; color: #6b7280;">Worklify Team</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

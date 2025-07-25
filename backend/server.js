import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import consultantRoutes from "./routes/consultant.routes.js";
import sessionRoutes from "./routes/session.routes.js";
import queryRoutes from "./routes/query.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import availabilityRoutes from "./routes/availability.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import documentRoutes from "./routes/document.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Connect to database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/consultants", consultantRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/availability", availabilityRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/documents", documentRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("CyGen Consultant API is running...");
});

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

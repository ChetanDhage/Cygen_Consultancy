// constants.js
export const USER_ROLES = {
  CUSTOMER: "customer",
  CONSULTANT: "consultant",
  ADMIN: "admin",
  SUB_ADMIN: "sub-admin",
};

export const CONSULTANT_STATUS = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
};

export const VERIFICATION_STATUS = {
  PENDING: "pending",
  VERIFIED: "verified",
  REJECTED: "rejected",
};

export const TRANSACTION_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
  REFUNDED: "refunded",
};

export const WORK_MODES = ["Remote", "On-site", "Hybrid"];

export const PAYMENT_METHODS = ["upi", "card", "bank_transfer"];

export const SESSION_TYPES = ["video", "audio", "chat"];

export const SESSION_STATUS = {
  SCHEDULED: "scheduled",
  ACTIVE: "active",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export const QUERY_STATUS = {
  NEW: "new",
  ACCEPTED: "accepted",
  REJECTED: "rejected",
  COMPLETED: "completed",
};

export const CATEGORIES = [
  "IT Infrastructure Management",
  "Network Security",
  "System Administration",
  "Game Development",
  "Embedded Systems & IoT",
  "Infrastructure as a Service",
  "Endpoint Security",
  "Identity & Access Management (IAM)",
  "Deep Learning",
  "IT Support & Helpdesk",
  "AI-powered Chatbots & Virtual Assistants",
  "Web Development",
  "Application Security",
  "Big Data Technologies",
  "Mobile App Development",
  "Cloud Security",
  "Business Intelligence",
  "Predictive Analytics",
  "Data Governance & Compliance",
  "Industrial IoT (IIoT)",
  "IoT Security",
  "Blockchain Security",
  "Data Engineering",
  "Infrastructure as Code (IaC)",
  "Configuration Management",
  "Monitoring & Logging",
  "Quantum Cryptography",
  "Quantum Machine Learning",
  "Continuous Integration & Deployment (CI/CD)",
  "AR/VR for Gaming",
  "Industrial Applications",
  "Robotic Process Automation (RPA)",
  "Autonomous Vehicles & Drones",
  "Quantum Algorithms",
];

// Analytics time ranges
export const ANALYTICS_RANGES = {
  WEEK: "7d",
  MONTH: "30d",
  QUARTER: "90d",
};

// File types for uploads
export const FILE_TYPES = {
  IMAGE: /jpeg|jpg|png/,
  DOCUMENT: /pdf|doc|docx/,
  ALL: /jpeg|jpg|png|pdf|doc|docx/,
};

// User status for admin dashboard
export const USER_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  SUSPENDED: "suspended",
};

// Notification types
export const NOTIFICATION_TYPES = {
  SYSTEM: "system",
  SESSION: "session",
  PAYMENT: "payment",
  VERIFICATION: "verification",
  GENERAL: "general",
};

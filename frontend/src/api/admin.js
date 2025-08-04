// /api/auth
// /api/users
// /api/consultants
// /api/sessions
// /api/payments
// /api/queries
// /api/documents
// /api/admin

import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// ✅ Consultant management
export const fetchConsultants = async () => {
  const response = await axios.get(`${BASE_URL}/api/admin/consultants`);
  return response.data;
};

export const updateConsultantStatus = async (id, status) => {
  const response = await axios.put(`${BASE_URL}/api/admin/consultants/${id}/status`, { status });
  return response.data;
};

// ✅ Customer management
export const fetchCustomers = async () => {
  const response = await axios.get(`${BASE_URL}/api/admin/customers`);
  return response.data;
};

// ✅ Transaction management
export const fetchTransactions = async () => {
  const response = await axios.get(`${BASE_URL}/api/admin/transactions`);
  return response.data;
};

// ✅ Verification management
export const fetchVerifications = async () => {
  const response = await axios.get(`${BASE_URL}/api/admin/verifications`);
  return response.data;
};

export const updateVerificationStatus = async (id, status) => {
  const response = await axios.put(`${BASE_URL}/api/admin/verifications/${id}/status`, { status });
  return response.data;
};

// ✅ Analytics
export const fetchAnalytics = async () => {
  const response = await axios.get(`${BASE_URL}/api/admin/analytics`);
  return response.data;
};

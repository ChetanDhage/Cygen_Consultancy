import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// ✅ Get Consultant 
export const fetchAllConsultant = async () => {
  const response = await axios.get(`${BASE_URL}/api/admin/verified-consultant`);
  return response;
  console.log(response);
};


// ✅ Get Consultant Profile
export const fetchConsultantProfile = async () => {
  const response = await axios.get(`${BASE_URL}/api/consultants/profile`);
  return response.data;
};

// ✅ Update Consultant Profile (with file upload)
export const updateConsultantProfile = async (formData) => {
  const response = await axios.put(`${BASE_URL}/api/consultants/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// ✅ Remove Certification
export const removeCertification = async (id) => {
  const response = await axios.delete(`${BASE_URL}/api/consultants/certifications/${id}`);
  return response.data;
};

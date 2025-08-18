import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// ✅ Get Consultant 
export const fetchAllConsultant = async () => {
   const response = await axios.get(
  `${BASE_URL}/api/admin/verified-consultant`,
 
);
  return response;
};

// ✅ Get Consultant Profile by ID
export const fetchConsultantById = async (consultant_id) => {
  const response = await axios.get(`${BASE_URL}/api/consultants/profile/${consultantId}`);
  console.log("Raw API Response:", response);

  const consultantData = response.data?.data;
  console.log("Fetched Consultant Profile:", consultantData);
  return response.data;
};

export const fetchConsultantProfile = async ({consultantId, token}) => {
  const response = await axios.get(
  `${BASE_URL}/api/consultants/profile/${consultantId}`,
  {
    headers: { Authorization: `Bearer ${token}` }
  }
);

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

//get consultant quries
export const getConsultantQuries = async ({ consultantId, token, status = "all", page = 1, limit = 10 }) => {
  return axios.get(`${BASE_URL}/api/queries`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      consultantId,
      status,
      page,
      limit
    }
  });
};


// ✅ Update Query Status
export const updateQueryStatus = async ({ queryId, token, status, date, duration, type }) => {
  const response = await axios.put(
    `${BASE_URL}/api/queries/${queryId}`, 
    { status, date, duration, type },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

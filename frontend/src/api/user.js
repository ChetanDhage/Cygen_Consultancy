import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const sendQuery = async ({ formData, token }) => {
  return axios.post(`${BASE_URL}/api/queries`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
};


export const getUserProfile = async ({ userId, token }) => {
  return axios.get(`${BASE_URL}/api/users/profile/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

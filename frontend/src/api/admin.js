// src/api/admin.js
import axios from "axios";
import { BASE_URL } from "../api";

// Fetch all clients
export const fetchClients = async () => {
  const response = await axios.get(`${BASE_URL}/admin/clients`);
  return response.data;
};

// Fetch client details
export const fetchClientDetails = async (clientId) => {
  const response = await axios.get(`${BASE_URL}/admin/clients/${clientId}`);
  return response.data;
};

// Fetch projects by client
export const fetchClientProjects = async (clientId) => {
  const response = await axios.get(
    `${BASE_URL}/admin/clients/${clientId}/projects`
  );
  return response.data;
};

// Fetch project details
export const fetchProjectDetails = async (projectId) => {
  const response = await axios.get(`${BASE_URL}/admin/projects/${projectId}`);
  return response.data;
};

// Edit project details
export const editProject = async (projectId, updatedData) => {
  const response = await axios.put(
    `${BASE_URL}/admin/projects/${projectId}`,
    updatedData
  );
  return response.data;
};

// Fetch freelancers applied to a project
export const fetchAppliedFreelancers = async (projectId) => {
  const response = await axios.get(
    `${BASE_URL}/admin/projects/${projectId}/freelancers`
  );
  return response.data;
};

// Remove freelancer from project
export const removeFreelancer = async (projectId, freelancerId) => {
  const response = await axios.delete(
    `${BASE_URL}/admin/projects/${projectId}/freelancers/${freelancerId}`
  );
  return response.data;
};

// Delete project
export const deleteProject = async (projectId) => {
  const response = await axios.delete(
    `${BASE_URL}/admin/projects/${projectId}`
  );
  return response.data;
};

// Delete client profile
export const deleteClient = async (clientId) => {
  const response = await axios.delete(`${BASE_URL}/admin/clients/${clientId}`);
  return response.data;
};

// Delete freelancer profile
export const deleteFreelancer = async (freelancerId) => {
  const response = await axios.delete(
    `${BASE_URL}/admin/freelancers/${freelancerId}`
  );
  return response.data;
};

// Add new job seekers
export const addNewJobSeekers = async (jobSeekerData, token) => {
  const response = await axios.post(
    `${BASE_URL}/api/admin/jobseekers`,
    jobSeekerData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Get all job seekers
export const getAllJobSeekers = async (token) => {
  const response = await axios.get(`${BASE_URL}/api/admin/jobseekers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

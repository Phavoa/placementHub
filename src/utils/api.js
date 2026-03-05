import axios from "axios";

// Access environment variables in Vite using import.meta.env
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper for multipart/form-data (CV uploads)
export const apiFormData = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default api;

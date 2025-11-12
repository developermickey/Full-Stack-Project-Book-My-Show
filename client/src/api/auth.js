import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const register = async (values) => {
  try {
    const response = await api.post("/api/auth/register", values);
    return response.data;
  } catch (error) {
    console.error("Register Error:", error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || error.message };
  }
};

export const login = async (values) => {
  try {
    const response = await api.post("/api/auth/login", values);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || error.message };
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get("/api/auth/current-user");
    return response.data;
  } catch (error) {
    console.error("Current User Error:", error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || error.message };
  }
};

import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const getAllMovie = async () => {
  try {
    const response = await api.get("/api/movie/all-movies");
    return response.data;
  } catch (error) {
    console.error("Moviews Error:", error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || error.message };
  }
};
import axios from "axios";

export const axiosServer = axios.create({
  baseURL: process.env.VITE_SERVER_URL,
});

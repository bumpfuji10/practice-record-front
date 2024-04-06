import axios from "axios";

const baseURL = import.meta.env.BASE_URL;

export const axiosInstance = axios.create({
  baseURL: baseURL,
});


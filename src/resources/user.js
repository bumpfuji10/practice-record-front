import { axiosInstance } from "../axiosInstanceConfig";

export const getUsers = () => {
  return axiosInstance.get("/api/v1/users");
};

export const createUser = (params) => {
  return axiosInstance.post("/api/v1/users", { user: params });
};

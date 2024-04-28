import { axiosInstance } from "../axiosInstanceConfig";

export const loginUser = (params) => {
  return axiosInstance.post("/api/v1/user_token", params);
};

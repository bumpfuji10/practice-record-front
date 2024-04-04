import axios from "axios";

export const getUsers = () => {
  return axios.get(`http://localhost:3000/api/v1/users`);
};

export const createUser = (params) => {
  return axios.post(`http://localhost:3000/api/v1/users`, { user: params })
};

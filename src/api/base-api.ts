import axios from "axios";

export const baseApi = axios.create({ baseURL: "http://localhost:3000/api" });

baseApi.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

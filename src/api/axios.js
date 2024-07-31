/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-14 17:01:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-30 23:58:38
 * @FilePath: /online-course-project/src/api/axios.js
 */
import request from "axios";

const service = request.create({
  baseURL: "http://localhost:8080/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token != null && typeof token != "undefined") {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default service;

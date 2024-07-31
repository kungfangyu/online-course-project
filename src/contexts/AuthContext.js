/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-31 00:05:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-31 01:10:56
 * @FilePath: /online-course-project/src/contexts/Authcontext.js
 */
// src/contexts/AuthContext.js
"use client";
import { login as apiLogin } from "@/api/auth"; // 使用现有的 login 函数
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

// 创建一个 AuthContext
const AuthContext = createContext({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setUser({ name: "User" });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await apiLogin(email, password);
      const token = response.data;
      setToken(token);
      localStorage.setItem("token", token);
      setUser({ name: email });
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    router.push("/signin");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

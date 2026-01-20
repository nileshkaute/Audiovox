import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        userData,
      );
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
      }
      return response.data;
    } catch (error) {
      console.error("Registration error:", error.response?.data?.message);
      throw error.response?.data?.message || "Registration failed";
    }
  };

  const login = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        userData,
      );
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
      }
      return response.data;
    } catch (error) {
      console.error("Login error:", error.response?.data?.message);
      throw error.response?.data?.message || "Login failed";
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Navbar from "./component/home/Navbar";

// Auth
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./component/shared/PrivateRoute";

// Admin Pages
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import AddProduct from "./pages/admin/AddProduct";

const App = () => {
  const location = useLocation();

  // Check if current path is admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <AuthProvider>
      {/* Show Navbar only on customer pages (not landing, not admin, not auth pages) */}
      {!isAdminRoute &&
        location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" && <Navbar />}

      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes - Protected */}
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit-product/:id" element={<AddProduct />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;


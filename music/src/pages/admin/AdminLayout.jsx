import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../component/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

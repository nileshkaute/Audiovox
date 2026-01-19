import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, PlusCircle, Settings, ExternalLink } from "lucide-react";

const AdminSidebar = () => {
  const navItems = [
    { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
    { to: "/admin/products", icon: Package, label: "Products" },
    { to: "/admin/add-product", icon: PlusCircle, label: "Add Product" },
    { to: "#", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="w-64 bg-[#161616] border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white tracking-wide">
          🎧 Admin Panel
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer - Link to Store */}
      <div className="p-4 border-t border-gray-800">
        <a
          href="/home"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm"
        >
          <ExternalLink size={16} />
          View Store
        </a>
      </div>
    </aside>
  );
};

export default AdminSidebar;

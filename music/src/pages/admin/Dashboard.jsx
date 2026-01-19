import React, { useState, useEffect } from "react";
import axios from "axios";
import { Package, Tag, Clock, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    taggedProducts: 0,
    lastProduct: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      const products = response.data;
      
      setStats({
        totalProducts: products.length,
        taggedProducts: products.filter((p) => p.tagVisible).length,
        lastProduct: products.length > 0 ? products[0] : null,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ icon: Icon, label, value, color, subtext }) => (
    <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
          <Icon size={24} />
        </div>
        <div>
          <p className="text-gray-400 text-sm">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
          {subtext && <p className="text-gray-500 text-xs mt-1">{subtext}</p>}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's your store overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={Package}
          label="Total Products"
          value={stats.totalProducts}
          color="bg-blue-600"
        />
        <StatCard
          icon={Tag}
          label="Tagged Products"
          value={stats.taggedProducts}
          color="bg-green-600"
        />
        <StatCard
          icon={Clock}
          label="Last Added"
          value={stats.lastProduct?.title || "N/A"}
          color="bg-purple-600"
          subtext={
            stats.lastProduct
              ? `₹${Number(stats.lastProduct.price).toLocaleString()}`
              : ""
          }
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/admin/add-product"
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            <Plus size={18} />
            Add New Product
          </Link>
          <Link
            to="/admin/products"
            className="flex items-center gap-2 px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

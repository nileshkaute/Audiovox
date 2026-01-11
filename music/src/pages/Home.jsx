import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flame, Headphones } from "lucide-react";
import Hero from "../component/home/Hero";
import ProductCard from "../component/shared/ProductCard";
import Footer from "../component/home/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* ===== PRODUCTS SECTION (Boat-style) ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 text-sm font-semibold rounded-full mb-3">
                 <span className="flex items-center gap-1">
                   <Flame size={16} className="text-red-600" /> Hot Products
                 </span>
              </span>
              <h2 className="text-4xl font-bold text-gray-900">
                Our Best Sellers
              </h2>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <button className="px-5 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
                All
              </button>
              <button className="px-5 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">
                Earbuds
              </button>
              <button className="px-5 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">
                Headphones
              </button>
              <button className="px-5 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">
                Speakers
              </button>
            </div>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Headphones size={80} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No Products Yet
              </h3>
              <p className="text-gray-500">
                Add products from the admin panel to see them here.
              </p>
            </div>
          )}

          {/* View All Button */}
          {products.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-8 py-4 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-semibold rounded-full transition-all duration-300">
                View All Products →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
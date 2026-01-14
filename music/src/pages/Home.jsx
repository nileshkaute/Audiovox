import React from "react";
import Hero from "../component/home/Hero";
import CreativeProductSection from "../component/home/CreativeProductSection";
import ProductSection from "../component/home/ProductSection";
import Footer from "../component/home/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <ProductSection />

      {/* Creative Product Section */}
      <CreativeProductSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
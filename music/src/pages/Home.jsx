import React from "react";
import Hero from "../component/home/Hero";
import CreativeProductSection from "../component/home/CreativeProductSection";
import ProductSection from "../component/home/ProductSection";
import Footer from "../component/home/Footer";
import TrustSection from "../component/home/TrustSection";
import TestimonialsSection from "../component/home/TestimonialsSection";
import NewsletterSection from "../component/home/NewsletterSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Trust Signals Section */}
      <TrustSection />

      {/* Products Section */}
      <ProductSection />

      {/* Creative Product Section */}
      <CreativeProductSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

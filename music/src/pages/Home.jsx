import React from "react";
import Hero from "../component/home/Hero";
import CreativeProductSection from "../component/home/CreativeProductSection";
import ProductSection from "../component/home/ProductSection";
import Footer from "../component/home/Footer";

import TestimonialsSection from "../component/home/TestimonialsSection";
import NewsletterSection from "../component/home/NewsletterSection";

import TechSpecsSection from "../component/home/TechSpecsSection";
import ComparisonSection from "../component/home/ComparisonSection";
import AppShowcaseSection from "../component/home/AppShowcaseSection";
import LifestyleGallery from "../component/home/LifestyleGallery";
import FAQSection from "../component/home/FAQSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F5E6D3] text-dark">
      {/* Hero Section */}
      <Hero />

      {/* Trust Signals Section */}
    

      {/* Products Section */}
      <ProductSection />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Tech Specs Section */}
      <TechSpecsSection />

      {/* App Showcase Section */}
      <AppShowcaseSection />

      {/* Lifestyle Gallery Section */}
      <LifestyleGallery />

      {/* FAQ Section */}
      <FAQSection />

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

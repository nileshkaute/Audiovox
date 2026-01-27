import React from "react";
import { Headphones, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-br from-[#E8D5C4] via-[#F5E6D3] to-[#E8D5C4] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary text-sm font-semibold rounded-full mb-6">
            <span className="flex items-center gap-2">
              <Headphones size={18} /> New Collection 2026
            </span>
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold text-dark leading-tight mb-6">
            Immerse in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Pure Sound
            </span>
          </h1>

          <p className="text-dark/70 text-lg max-w-xl mb-8">
            Experience crystal-clear audio with our premium collection of
            earphones, headphones, and speakers. Designed for audiophiles who
            demand excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-secondary hover:bg-primary text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-secondary/30">
              Shop Now
            </button>
            <button className="px-8 py-4 border-2 border-dark/20 hover:border-secondary text-dark font-semibold rounded-full transition-all duration-300">
              Explore Collection
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-12 justify-center lg:justify-start">
            <div>
              <h3 className="text-3xl font-bold text-dark">50K+</h3>
              <p className="text-dark/60 text-sm">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-dark">200+</h3>
              <p className="text-dark/60 text-sm">Products</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-dark">4.9★</h3>
              <p className="text-dark/60 text-sm">Rating</p>
            </div>
          </div>
        </div>

        {/* Right - Hero Image Placeholder */}
        <div className="flex-1 relative">
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] mx-auto">
            {/* Glowing rings */}
            <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border border-primary/20"></div>

            {/* Product placeholder */}
            <div className="absolute inset-8 bg-gradient-to-br from-beige to-primary/20 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <Headphones size={80} className="text-dark/60 mx-auto" />
                <p className="text-dark/70 text-sm mt-4">Premium Headphones</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-0 right-0 px-4 py-2 bg-dark/10 backdrop-blur-sm rounded-full text-dark text-sm flex items-center gap-2">
              <Sparkles size={16} className="text-secondary" /> Best Seller
            </div>
            <div className="absolute bottom-10 -left-4 px-4 py-2 bg-secondary rounded-full text-white text-sm font-semibold">
              30% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


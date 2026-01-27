import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Headphones, ChevronDown, Search, Zap, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        height: scrolled ? "60px" : "80px",
        backgroundColor: scrolled ? "rgba(245, 230, 211, 0.98)" : "rgba(245, 230, 211, 0.95)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full backdrop-blur-lg border-b border-primary/20 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Centered and Bold */}
          <Link to="/home" className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            <motion.div
              animate={{
                scale: scrolled ? 0.8 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary">
                <Headphones className="w-6 h-6 text-dark" />
              </div>
              <motion.span
                animate={{
                  fontSize: scrolled ? "1.5rem" : "2rem",
                }}
                transition={{ duration: 0.3 }}
                className="font-extrabold bg-gradient-to-r from-dark to-accent bg-clip-text text-transparent"
              >
                NeoSound
              </motion.span>
            </motion.div>
          </Link>

          {/* Navigation Links - Left */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/home#products" className="text-dark/80 hover:text-primary transition-colors font-medium">
              Products
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-dark/80 hover:text-primary transition-colors font-medium">
                <span>Categories</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <Link to="/about" className="text-dark/80 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-dark/80 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
              <Search className="w-5 h-5 text-dark/70" />
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-dark/70" />
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                0
              </span>
            </button>
            <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all">
              <Zap className="w-4 h-4" />
              <span className="font-semibold">Shop Now</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

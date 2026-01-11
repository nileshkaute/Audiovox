import React from "react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CreditCard, 
  Banknote, 
  Landmark 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold text-white uppercase mb-4">
              <span className="text-red-600 text-3xl">A</span>udi
              <span className="text-red-600">o</span>vo
              <span className="text-red-600 text-3xl">x</span>
            </div>
            <p className="text-gray-500 mb-6">
              Premium audio gear for true music lovers. Experience sound like
              never before.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-300 text-white"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-300 text-white"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-300 text-white"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-300 text-white"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-red-500 mt-1" />
                <span>123 Audio Street, Mumbai, India - 400001</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-red-500 mt-1" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-red-500 mt-1" />
                <span>support@audiovox.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-red-500 mt-1" />
                <span>Mon - Sat: 10AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 AudioVox. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-red-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Cookie Policy
            </a>
          </div>
          <div className="flex gap-3 text-gray-400">
            <CreditCard size={24} />
            <Banknote size={24} />
            <Landmark size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


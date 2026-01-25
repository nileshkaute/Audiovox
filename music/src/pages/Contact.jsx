import React from "react";
import Footer from "../component/home/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-gray-900 mb-4">GET IN <span className="text-red-600">TOUCH</span></h1>
            <p className="text-gray-500 text-lg">Have questions? We're here to help you find your perfect sound.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-8 bg-white rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                </div>
                <p className="text-gray-500">support@audiovox.com</p>
                <p className="text-gray-500">biz@audiovox.com</p>
              </div>

              <div className="p-8 bg-white rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                </div>
                <p className="text-gray-500">+91 98765 43210</p>
                <p className="text-gray-500">Mon-Sat: 10AM - 8PM</p>
              </div>

              <div className="p-8 bg-white rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                </div>
                <p className="text-gray-500">123 Audio Street, Bandra West</p>
                <p className="text-gray-500">Mumbai, India - 400001</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 p-8 lg:p-12 bg-white rounded-[40px] shadow-sm border border-gray-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-red-600 focus:outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-red-600 focus:outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-red-600 focus:outline-none transition-all" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                  <textarea rows="5" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-red-600 focus:outline-none transition-all resize-none" placeholder="Tell us more about your inquiry..."></textarea>
                </div>
                <button className="w-full py-4 bg-red-600 hover:bg-black text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

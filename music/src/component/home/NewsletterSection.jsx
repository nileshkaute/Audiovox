import React from "react";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black rounded-[40px] p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 blur-[100px] -z-0"></div>

          <div className="relative z-10 max-w-3xl">
            <span className="text-red-500 font-black uppercase tracking-[0.3em] text-sm mb-6 block">
              STAY IN THE LOOP
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-dark mb-8 leading-tight">
              Get 10% Off Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">First Order</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-8 py-4 rounded-full bg-dark/10 border border-dark/20 text-dark placeholder:text-dark/60 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all font-medium"
              />
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-dark font-bold rounded-full transition-all flex items-center justify-center gap-2 group">
                SUBSCRIBE
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            <p className="mt-6 text-sm text-dark/60">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

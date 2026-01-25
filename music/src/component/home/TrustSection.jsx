import React from "react";
import { Truck, ShieldCheck, Headphones, RefreshCw } from "lucide-react";

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const TrustSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Feature 
          icon={Truck} 
          title="Free Delivery" 
          description="Across all orders above ₹499"
        />
        <Feature 
          icon={ShieldCheck} 
          title="Secure Payment" 
          description="100% secure payment methods"
        />
        <Feature 
          icon={Headphones} 
          title="24/7 Support" 
          description="Dedicated support team"
        />
        <Feature 
          icon={RefreshCw} 
          title="Easy Returns" 
          description="7 days return policy"
        />
      </div>
    </div>
  );
};

export default TrustSection;

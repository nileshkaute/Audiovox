import React from "react";
import { Zap, ShieldCheck, Star, ArrowRight } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <div 
    className={`p-6 bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
      <Icon className="text-red-600 group-hover:text-white transition-colors duration-300" size={28} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const CreativeProductSection = () => {
  return (
    <section className="py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side - Features */}
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            <div className="mb-10 lg:text-left text-center">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                Designed for the <br />
                <span className="text-red-600">Perfect Harmony</span>
              </h2>
              <p className="text-gray-500 text-lg">
                Crafted with precision engineering and premium materials to deliver 
                an unparalleled listening experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard 
                icon={Zap} 
                title="Super Fast Charge" 
                description="Get 5 hours of playback with just 10 minutes of charging."
                delay={0}
              />
              <FeatureCard 
                icon={ShieldCheck} 
                title="2 Year Warranty" 
                description="Worry-free replacement guarantee for all manufacturing defects."
                delay={100}
              />
              <div className="md:col-span-2">
                <FeatureCard 
                  icon={Star} 
                  title="Premium Acoustics" 
                  description="Studio-grade sound quality with deep bass and crystal clear highs, fine-tuned by experts."
                  delay={200}
                />
              </div>
            </div>

            <div className="pt-6 flex justify-center lg:justify-start">
              <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-red-600 transition-colors group">
                LEARN MORE ABOUT OUR TECHNOLOGY 
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </button>
            </div>
          </div>

          {/* Right Side - Creative Visual */}
          <div className="flex-1 relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              
              {/* Background Decorative Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-100/50 rounded-full blur-[100px] -z-10 animate-pulse"></div>
              <div className="absolute top-10 right-0 w-32 h-32 bg-red-200/40 rounded-full blur-3xl"></div>
              
              {/* Floating Product "Stage" */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white to-gray-100 rounded-[60px] shadow-2xl overflow-hidden border border-white flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                
                {/* Product Content (Placeholder for real product image) */}
                <div className="relative z-10 text-center p-10">
                   <div className="relative inline-block mb-8">
                     <div className="absolute -inset-4 bg-red-100 rounded-full animate-ping opacity-25"></div>
                     <div className="w-48 h-48 lg:w-64 lg:h-64 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                        <span className="text-8xl">🎧</span>
                     </div>
                   </div>
                   
                   <div className="space-y-4">
                     <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-xs font-black uppercase tracking-widest rounded-full">
                       Best Audio 2026
                     </span>
                     <h4 className="text-3xl font-black text-gray-900">AIR-X PRO</h4>
                     <p className="text-gray-400 font-medium">NEXT GEN WIRELESS ENGINE</p>
                   </div>
                </div>

                {/* Decorative Text in background */}
                <div className="absolute top-4 left-4 text-9xl font-black text-black/[0.03] select-none pointer-events-none">
                  SOUND
                </div>
                <div className="absolute bottom-4 right-4 text-9xl font-black text-black/[0.03] select-none pointer-events-none">
                  PRO
                </div>
              </div>

              {/* Orbital badges */}
              <div className="absolute -top-4 -right-4 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-bounce hover:animate-none cursor-default">
                 <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">4.9</div>
                 <div>
                   <p className="text-xs font-bold text-gray-900 leading-none">Trust Score</p>
                   <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Verified Reviews</p>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreativeProductSection;

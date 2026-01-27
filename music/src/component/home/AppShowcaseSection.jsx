import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Sliders, MapPin, RefreshCw } from "lucide-react";

const APP_FEATURES = [
  {
    icon: <Sliders className="w-6 h-6" />,
    title: "Pro EQ Control",
    description: "Customize every frequency to match your unique hearing profile.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Find My Audio",
    description: "Never lose your buds again with precision GPS tracking.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Over-the-Air Updates",
    description: "Your earphones get better over time with seamless firmware updates.",
  },
];

const AppShowcaseSection = () => {
  return (
    <section className="py-24 px-4 bg-beige overflow-hidden" id="app">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Phone Mockup */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
               whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1, type: "spring" }}
               className="relative w-64 h-[500px] bg-black rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden"
             >
                {/* Screen Content */}
                <div className="absolute inset-2 bg-gradient-to-b from-primary/20 to-black rounded-[2.5rem] p-6 flex flex-col pt-12">
                   <div className="w-full h-1 bg-gray-600 rounded-full mx-auto mb-8" />
                   <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 border border-primary/30 flex items-center justify-center">
                         <div className="w-12 h-12 bg-primary rounded-full animate-pulse" />
                      </div>
                      <h4 className="text-white font-bold">Neo Connect</h4>
                      <p className="text-xs text-primary">Connected</p>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="h-12 bg-dark/5 rounded-xl border border-dark/10 flex items-center px-4 justify-between">
                         <span className="text-xs text-dark">Noise Cancelling</span>
                         <div className="w-8 h-4 bg-primary rounded-full" />
                      </div>
                      <div className="h-12 bg-dark/5 rounded-xl border border-dark/10 flex items-center px-4 justify-between">
                         <span className="text-xs text-dark">Transparency</span>
                         <div className="w-8 h-4 bg-gray-700 rounded-full" />
                      </div>
                      <div className="h-24 bg-dark/5 rounded-xl border border-dark/10 p-4">
                         <div className="flex justify-between text-[10px] text-dark/60 mb-2">
                            <span>Bass</span>
                            <span>Treble</span>
                         </div>
                         <div className="flex gap-1 items-end h-8">
                            {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                               <div key={i} className="flex-1 bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }} />
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
             
             {/* Decorative Elements */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 blur-[100px] rounded-full" />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dark">
                Total Control in <br />
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Your Hands
                </span>
              </h2>
              <p className="text-dark/70 text-lg mb-12 max-w-lg">
                The Neo Connect app unlocks the full potential of your earphones. 
                Fine-tune your audio markers, locate your buds, and keep them up to date.
              </p>

              <div className="space-y-8">
                {APP_FEATURES.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-dark/5 border border-dark/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                      <p className="text-dark/60 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex gap-4">
                 <button className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    App Store
                 </button>
                 <button className="px-8 py-3 border border-dark/20 text-white rounded-full font-bold hover:bg-dark/5 transition-colors flex items-center gap-2">
                    Play Store
                 </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;

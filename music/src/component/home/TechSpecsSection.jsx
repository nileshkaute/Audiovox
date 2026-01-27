import React from "react";
import { motion } from "framer-motion";
import { Battery, Zap, Bluetooth, ShieldCheck, Volume2, Mic2 } from "lucide-react";

const specs = [
  {
    icon: <Battery className="w-8 h-8 text-primary" />,
    title: "30-Hour Battery",
    description: "Long-lasting power for all-day listening, from commute to workout.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Fast Charging",
    description: "10 minutes of charging gives you 5 hours of playback time.",
  },
  {
    icon: <Bluetooth className="w-8 h-8 text-primary" />,
    title: "Bluetooth 5.3",
    description: "Ultra-stable connection with low latency for seamless audio.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "IPX5 Water Resistant",
    description: "Sweat and rain protection for life on the move.",
  },
  {
    icon: <Volume2 className="w-8 h-8 text-primary" />,
    title: "Adaptive ANC",
    description: "Advanced noise cancellation that adapts to your environment.",
  },
  {
    icon: <Mic2 className="w-8 h-8 text-primary" />,
    title: "Clear Call Tech",
    description: "6-microphone system for crystal-clear calls even in windy settings.",
  },
];

const TechSpecsSection = () => {
  return (
    <section className="py-24 px-4 bg-beige/50" id="specs">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-dark to-accent bg-clip-text text-transparent"
          >
            Engineering Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-dark/70 text-lg max-w-2xl mx-auto"
          >
            Every detail meticulously designed for the ultimate listening experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-morphism p-8 rounded-2xl group hover:border-primary/50 transition-colors"
            >
              <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit group-hover:scale-110 transition-transform">
                {spec.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-dark uppercase tracking-wider">
                {spec.title}
              </h3>
              <p className="text-dark/70 leading-relaxed font-light">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;

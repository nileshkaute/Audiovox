import React from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const COMPARISON_DATA = {
  features: [
    "Battery Life",
    "Active Noise Cancellation",
    "Transparency Mode",
    "Water Resistance",
    "Customizable EQ",
    "Multipoint Connection",
    "Spatial Audio",
  ],
  models: [
    {
      name: "Neo Lite",
      price: "$99",
      specs: ["20 Hours", "Standard", true, "IPX4", false, false, false],
    },
    {
      name: "Neo Pro",
      price: "$199",
      specs: ["30 Hours", "Adaptive", true, "IPX5", true, true, true],
      featured: true,
    },
    {
      name: "Neo Max",
      price: "$299",
      specs: ["50 Hours", "Pro-Active", true, "IPX7", true, true, true],
    },
  ],
};

const ComparisonSection = () => {
  return (
    <section className="py-24 px-4 bg-dark" id="comparison">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Choose Your Sound
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Find the perfect match for your lifestyle and listening preferences.
          </motion.p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="py-6 px-4 text-gray-400 font-medium">Features</th>
                {COMPARISON_DATA.models.map((model, idx) => (
                  <th key={idx} className="py-6 px-4 text-center">
                    <div className={`p-4 rounded-xl ${model.featured ? 'bg-primary/10 border border-primary/20' : 'bg-white/5'}`}>
                      <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
                      <p className="text-primary font-semibold">{model.price}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.features.map((feature, fIdx) => (
                <motion.tr
                  key={fIdx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: fIdx * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-6 px-4 text-gray-300 font-medium">{feature}</td>
                  {COMPARISON_DATA.models.map((model, mIdx) => (
                    <td key={mIdx} className="py-6 px-4 text-center">
                      <div className="flex justify-center">
                        {typeof model.specs[fIdx] === "string" ? (
                          <span className="text-white font-medium">{model.specs[fIdx]}</span>
                        ) : model.specs[fIdx] ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Minus className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

import React from "react";
import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  {
    url: "/assets/lifestyle_1.png",
    title: "Urban Minimalist",
    size: "col-span-1 row-span-2",
  },
  {
    url: "/assets/lifestyle_2.png",
    title: "Precision Engineering",
    size: "col-span-1 row-span-1",
  },
  {
    url: "/assets/lifestyle_3.png",
    title: "All-Weather Motion",
    size: "col-span-1 row-span-1",
  },
];

const LifestyleGallery = () => {
  return (
    <section className="py-24 px-4 bg-dark" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Live in Your <span className="text-primary">Sound</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Designed to fit perfectly into your daily rhythm, whether you're at work, 
            in the gym, or exploring the city.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group ${img.size}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h4 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.title}
                </h4>
                <p className="text-primary text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  View Collection
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleGallery;

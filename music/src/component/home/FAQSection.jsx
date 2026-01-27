import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "How long does the battery last on a single charge?",
    answer: "The Neo Pro model offers up to 30 hours of total playback time with the charging case. A single charge of the earbuds provides approximately 8 hours of continuous listening.",
  },
  {
    question: "Are these earphones compatible with iPhones and Android?",
    answer: "Yes! Neo Connect earphones use standard Bluetooth 5.3 technology and are fully compatible with any Bluetooth-enabled device, including iOS and Android smartphones, tablets, and computers.",
  },
  {
    question: "Do they support fast charging?",
    answer: "Absolutely. With our Turbo Charge technology, a quick 10-minute charge gives you up to 5 hours of playback time.",
  },
  {
    question: "Is the Neo Connect app required for use?",
    answer: "While not strictly required for basic listening, the Neo Connect app is highly recommended for access to customizable EQ settings, firmware updates, and the 'Find My Audio' feature.",
  },
  {
    question: "What is the warranty period?",
    answer: "All our products come with a 1-year limited manufacturer warranty against defects in materials and workmanship.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-2 rounded-full border border-white/10 ${isOpen ? 'bg-primary border-primary' : 'bg-white/5'}`}>
          {isOpen ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-4 bg-dark/50" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Got <span className="text-primary">Questions?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Find quick answers to common queries about our premium audio products.
          </motion.p>
        </div>

        <div className="glass-morphism rounded-3xl p-8 md:p-12">
          {FAQ_DATA.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

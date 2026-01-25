import React, { useState } from "react";
import Footer from "../component/home/Footer";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button 
        className="w-full py-8 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">{question}</h3>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
        <p className="text-gray-500 text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is the warranty period for AudioVox products?",
      answer: "All our products come with a 12-month standard warranty. Higher-end models like the AIR-X PRO include an extended 24-month warranty coverage for manufacturing defects."
    },
    {
      question: "How long does shipping take?",
      answer: "Orders are typically processed within 24 hours. Domestic shipping usually takes 3-5 business days, while international shipping can take 7-14 business days depending on the location."
    },
    {
      question: "Are your earphones compatible with all devices?",
      answer: "Yes, our wireless products use the latest Bluetooth 5.3 technology which is backwards compatible with all Bluetooth-enabled devices. Our wired products use a standard 3.5mm jack or USB-C depending on the model."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day hassle-free return policy for products in original packaging and condition. If you're not satisfied with your purchase, simply contact our support team."
    },
    {
      question: "How do I claim a warranty?",
      answer: "To claim a warranty, please visit our 'Service' page or contact us at support@audiovox.com with your order ID and a brief description of the issue. Our team will guide you through the process."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-4 block">KNOWLEDGE BASE</span>
            <h1 className="text-5xl font-black text-gray-900 mb-6">FREQUENTLY ASKED <br /><span className="text-red-600">QUESTIONS</span></h1>
            <p className="text-gray-500 text-lg">Quick answers to common questions about our products and services.</p>
          </div>

          <div className="bg-white rounded-[40px]">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>

          <div className="mt-20 p-12 bg-gray-900 rounded-[40px] text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-8">Can't find the answer you're looking for? Please chat with our friendly team.</p>
            <button className="px-10 py-4 bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold rounded-2xl transition-all duration-300">
              CONTACT SUPPORT
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;

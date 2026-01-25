import React from "react";
import Footer from "../component/home/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            WE ARE <span className="text-red-600">AUDIOVOX</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Redefining the way you experience sound. Our mission is to deliver professional-grade audio technology to music lovers everywhere.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight">
              Our Journey Started with a <span className="text-red-600">Single Beat</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2024, AudioVox was born out of a frustration with overpriced audio gear that sacrificed quality for branding. We believed that everyone deserves to hear music the way the artist intended.
              </p>
              <p>
                What started as a small team of acoustic engineers and music enthusiasts has grown into a global community of sound pioneers. We obsess over every decibel, every driver, and every design detail.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="bg-gray-100 rounded-[40px] aspect-square flex items-center justify-center p-12">
                <span className="text-[200px] grayscale opacity-20">🎵</span>
                <div className="absolute inset-x-0 bottom-12 text-center">
                    <p className="text-4xl font-black text-gray-900 italic">"Sound is Life."</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-4">Quality First</h3>
              <p className="text-gray-500">We use only the finest materials and components to ensure durability and performance.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-500">Continuous R&D to bring the latest audio technology to your ears first.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-4">Customer Obsession</h3>
              <p className="text-gray-500">Your satisfaction is our north star. We're here for you long after your purchase.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

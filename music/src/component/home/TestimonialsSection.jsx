import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Digital Nomad",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    content: "The sound quality of the AIR-X PRO is absolutely mind-blowing. I've used many premium brands, but AudioVox has nailed the balance between bass and clarity.",
    rating: 5
  },
  {
    name: "Sneha Kapoor",
    role: "Fitness Enthusiast",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    content: "Finally, earbuds that stay in place during my intense workouts! The battery life is a lifesaver for my long sessions.",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "Music Producer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    content: "As a producer, I'm picky about frequency response. These headphones provide a surprisingly flat and accurate response for the price point.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          What Our <span className="text-red-600">Community</span> Says
        </h2>
        <p className="text-gray-500 text-lg mb-16 max-w-2xl mx-auto">
          Join thousands of satisfied music lovers who have upgraded their audio experience with AudioVox.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-colors duration-300 text-left">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    size={16} 
                    className={`${index < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

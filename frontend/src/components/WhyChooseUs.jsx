import React from "react";
import { ShieldCheck, Users, Headphones, Building2 } from "lucide-react"; // icons

const features = [
  {
    icon: <ShieldCheck size={40} className="text-yellow-500" />,
    title: "Trusted & Verified",
    description: "All properties are verified for safety and authenticity.",
  },
  {
    icon: <Users size={40} className="text-yellow-500" />,
    title: "Customer Focused",
    description: "We help buyers, sellers, and renters at every step.",
  },
  {
    icon: <Building2 size={40} className="text-yellow-500" />,
    title: "Wide Property Range",
    description: "From apartments to villas – explore diverse properties.",
  },
  {
    icon: <Headphones size={40} className="text-yellow-500" />,
    title: "24/7 Support",
    description: "Our team is always here to assist you round-the-clock.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why <span className="text-yellow-500">Choose Us?</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We make real estate easy, transparent, and reliable – ensuring your property journey is stress-free.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

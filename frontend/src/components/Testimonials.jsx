import React from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Home Buyer",
    text: "MakeIt helped me find my dream apartment in Mumbai with complete transparency. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    role: "Seller",
    text: "Selling my property was super easy and fast. The team provided excellent support.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Verma",
    role: "Investor",
    text: "Great platform for exploring real estate opportunities. Smooth experience from start to finish.",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our <span className="text-yellow-500">Clients Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="font-bold">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

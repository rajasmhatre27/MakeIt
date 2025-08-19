import React from "react";

const locations = [
  {
    name: "Mumbai",
    image: "https://source.unsplash.com/600x400/?mumbai,city",
  },
  {
    name: "Pune",
    image: "https://source.unsplash.com/600x400/?pune,buildings",
  },
  {
    name: "Bangalore",
    image: "https://source.unsplash.com/600x400/?bangalore,skyline",
  },
  {
    name: "Delhi",
    image: "https://source.unsplash.com/600x400/?delhi,architecture",
  },
];

const PopularLocations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Popular <span className="text-yellow-500">Locations</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{loc.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;

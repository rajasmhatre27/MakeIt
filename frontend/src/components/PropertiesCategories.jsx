// PropertiesCategories.jsx
import React from "react";
import { Home, Building2, Briefcase, Map } from "lucide-react"; // icons

const categories = [
  {
    name: "Apartments",
    icon: <Building2 size={40} />,
    description: "Modern apartments in prime locations.",
  },
  {
    name: "Villas",
    icon: <Home size={40} />,
    description: "Luxury villas with premium facilities.",
  },
  {
    name: "Commercial Spaces",
    icon: <Briefcase size={40} />,
    description: "Offices, shops & business properties.",
  },
  {
    name: "Lands / Plots",
    icon: <Map size={40} />,
    description: "Buy and sell residential or commercial land.",
  },
];

const PropertiesCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Search by <span className="text-blue-600">Categories</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Explore properties by type to find your perfect match.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer group"
            >
              <div className="flex justify-center items-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-500 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesCategories;

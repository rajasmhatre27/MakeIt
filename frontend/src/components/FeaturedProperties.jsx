import React from "react";

const featuredProperties = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x250", // replace with real image
    price: "$250,000",
    location: "Mumbai, India",
    type: "Apartment",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x250",
    price: "$500,000",
    location: "Pune, India",
    type: "Villa",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x250",
    price: "$750,000",
    location: "Delhi, India",
    type: "Commercial Space",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400x250",
    price: "$150,000",
    location: "Goa, India",
    type: "Land / Plot",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-yellow-500">Properties 🏠</span>
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Explore trending and premium properties available right now.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* Property Image */}
              <img
                src={property.image}
                alt={property.type}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Property Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {property.price}
                </h3>
                <p className="text-gray-600 mb-1">{property.location}</p>
                <p className="text-sm text-gray-500 mb-4">{property.type}</p>

                {/* View Details Button */}
                <button className="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;

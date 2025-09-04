import React, { useEffect, useState } from "react";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/properties");
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🏠 Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property._id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
          >
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <p className="text-gray-600">{property.description}</p>
            <p className="font-bold mt-2">💰 ₹{property.price}</p>
            <p className="text-sm text-gray-500">📍 {property.location}</p>
            <p className="text-sm">👤 {property.owner}</p>
            <p className="text-sm">📞 {property.ownerContact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;

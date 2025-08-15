import React, { useState } from "react";
import HeroBanner from "../assets/images/HeroSectionBanner.png"; // ✅ correct file extension

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <section
      className="relative h-[500px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${HeroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Find Your Dream Property
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {["buy", "rent", "sell"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Location"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
          />
          <select className="flex-1 border border-gray-300 rounded-lg px-4 py-2">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Commercial</option>
          </select>
          <input
            type="number"
            placeholder="Max Price"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

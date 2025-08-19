import React, { useState } from "react";
import HeroBanner from "../assets/images/HeroSectionBanner.png";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <section
      className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${HeroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Find Your <span className="text-yellow-400">Dream Property</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Buy, Rent, or Sell properties with ease and confidence.
        </p>

        {/* Role Tabs */}
        <div className="flex justify-center gap-6">
          {["buy", "sell"].map((tab) => (
            <button
              key={tab}
              className={`px-10 py-3 rounded-full text-lg font-semibold transition duration-300 transform ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg scale-110 hover:shadow-blue-400/50"
                  : "bg-white/90 text-gray-900 hover:bg-gray-200 hover:scale-105"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

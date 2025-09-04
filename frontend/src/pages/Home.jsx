import React from "react";
import HeroSection from "../components/HeroSection";
import PropertiesCategories from "../components/PropertiesCategories";
import FeaturedProperties from "../components/FeaturedProperties";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularLocations from "../components/PopularLocations";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import PropertyList from "../components/PropertyList";

const Home = () => {
  return (
    <>
      <HeroSection/>
      <PropertiesCategories/>
      <PropertyList/>
      <FeaturedProperties/>
      <WhyChooseUs/>
      <PopularLocations/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default Home;

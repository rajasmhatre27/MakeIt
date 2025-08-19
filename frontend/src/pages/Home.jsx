import React from "react";
import HeroSection from "../components/HeroSection";
import PropertiesCategories from "../components/PropertiesCategories";
import FeaturedProperties from "../components/FeaturedProperties";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularLocations from "../components/PopularLocations";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection/>
      <PropertiesCategories/>
      <FeaturedProperties/>
      <WhyChooseUs/>
      <PopularLocations/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default Home;

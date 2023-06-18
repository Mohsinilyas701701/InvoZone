import React from "react";
import Slider1 from "../../Home/Hero/Slider";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Hero.css";

const Hero = () => {
  const { typeText } = useTypewriter({
    words: ["Fintechs", "Banks", "RegTechs"],
    loop: {},
    typeSpeed: 120,
  });
  return (
    <div className='home_hero d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='row gap-5'>
              <h1 className='display-1 fw-bold'>
                Software Development Consulting for
                <span>{typeText}</span>
                <span style={{ color: "white" }}>
                  <Cursor />
                </span>
              </h1>
              <p>
                InvoZone offers software development consulting services for businesses, startups,
                and enterprises. Partner with a reliable software development company to scale up
                your engineering capacity.
              </p>
              <a href='' className='btn-brand-yellow'>
                Schedule a Call
              </a>
            </div>
          </div>
          <div className='col-6'>
            <Slider1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

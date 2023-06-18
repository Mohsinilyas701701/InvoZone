import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "../../../assets/slider1.webp";
import sliderImg2 from "../../../assets/slider2.webp";
import sliderImg3 from "../../../assets/slider3.webp";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={sliderImg1} alt='' />
          </div>
          <div>
            <img src={sliderImg2} alt='' />
          </div>
          <div>
            <img src={sliderImg3} alt='' />
          </div>
        </Slider>
      </div>
    );
  }
}

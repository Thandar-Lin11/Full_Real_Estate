import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Companies.css";

export default class Companies extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <section className="main-container">
        <Slider {...settings}>
          {/* <div className="paddings innerWidth flexCenter c-container">
            <img src="./prologis.png" alt="" />
            <img src="./realty.png" alt="" />
            <img src="./tower.png" alt="" />
            <img src="./equinix.png" alt="" />
          </div> */}
          <div className="container">
            <img src="./prologis.png" alt="" />
          </div>
          <div className="container">
            <img src="./realty.png" alt="" />
          </div>
          <div className="container">
            <img src="./tower.png" alt="" />
          </div>
          <div className="container">
            <img src="./equinix.png" alt="" />
          </div>
        </Slider>
      </section>
    );
  }
}

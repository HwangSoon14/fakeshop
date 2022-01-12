import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import '../css/Deal.scss'
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Deals = () => {
  return (
    <div className="deals">
        <span>Super Deal! Free Shipping on Orders Over $100</span>
    </div>
  );
};

export default Deals;

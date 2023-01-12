import React from "react";
import Logo from "../images/earth1.png";

const Hero = () => {
  return (
    <div className="hero-cont">
      <div className="hero-img-cont">
        <img src={Logo} alt="logo png" />
        <p>Travel Journal</p>
      </div>
    </div>
  );
};

export default Hero;

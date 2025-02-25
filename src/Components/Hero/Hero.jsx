import React from "react";
import homepagevideo from "../../assets/homepagevideo.mp4";
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <div className="herosection">
      <video src={homepagevideo} autoPlay loop muted playsInline></video>
    </div>
  );
};

export default Hero;

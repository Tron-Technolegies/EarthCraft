import React from "react";
// import homepagevideo from "../../assets/homepagevideo.mp4";
import caletalhomepagevideo from "../../assets/caletalhomepagevideo.mp4";
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <div className="herosection">
      <video src={caletalhomepagevideo} autoPlay loop muted playsInline ></video>
    </div>
  );
};

export default Hero;

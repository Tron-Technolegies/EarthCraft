import React from "react";
// import homepagevideo from "../../assets/homepagevideo.mp4";
import caletalhomepagevideo from "../../assets/caletalhomepagevideo.mp4";
import caletal_projects from "../../assets/caletal_projects.mp4";
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <div className="herosection">
      <video src={caletal_projects} autoPlay loop muted playsInline ></video>
    </div>
  );
};

export default Hero;

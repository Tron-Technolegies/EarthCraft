import React from "react";
import "../Branding/Branding.css";
import caletal_logo from "../../assets/logos/caletal_logo.png";
import earthcraftlogo from "../../assets/earthcraftlogo.png";

const Branding = () => {
  return (
    <div className="branding_main_container">
      <h2>Caletal turns to EarthCraft</h2>
      <div className="rebranding-container">
        <div className="branding-item old-brand">
          <h3>We Were</h3>
          <div className="logo-container">
            <img src={caletal_logo} alt="Caletal Logo" className="brand-logo" />
          </div>
        </div>

        <div className="branding-arrow">
          <div className="arrow">→</div>
        </div>

        <div className="branding-item new-brand">
          <h3>Now We Are</h3>
          <div className="logo-container">
            <img
              src={earthcraftlogo}
              alt="EarthCraft Logo"
              className="brand-logo earthcraft-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;

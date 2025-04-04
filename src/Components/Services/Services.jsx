import React from "react";
import "../Services/Services.css";

import interior from "../../assets/servicesection/interior_service.jpg";
import architecture from "../../assets/servicesection/architecture_service.jpg";
import contract from "../../assets/servicesection/contract_service.jpg";

const Services = () => {
  return (
    <div className="servicessection">
      <div className="servicesections_heading">
        <h1>Our Services</h1>
      </div>

      <div className="various_services">
        <div className="service-item">
          <img src={interior} alt="Interior design" />
          <h2>Interior</h2>
        </div>
        <div className="service-item">
          <img src={architecture} alt="Architecture design" />
          <h2>Architecture</h2>
        </div>
        <div className="service-item">
          <img src={contract} alt="Contract services" />
          <h2>Contract</h2>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Services;

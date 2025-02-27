import React from "react";
import "../Services/Services.css";
import interior from "../../assets/interior.jpg";
import architecture from "../../assets/architecture.jpg";
import contract from "../../assets/contract.jpg";

const Services = () => {
  return (
    <div className="servicessection">
      <div className="servicesections_heading">
        <h1>Our Services</h1>
        {/* <p>
          With an eye for space detail and design, we create a unique experience
          that transform your lifestyle
        </p> */}
      </div>
      
      <div className="various_services">
        <div className="service-item">
          <img src={interior} alt="Interior design" />
          <h2>Interior</h2>
          {/* <p>
            Proper arrangement of the interior always makes a house feel like a
            home. We have implemented a concept in our projects that triggers
            originality of the materials which gives not just aesthetic grandeur
            but also induces a connection with life.
          </p> */}
        </div>
        <div className="service-item">
          <img src={architecture} alt="Architecture design" />
          <h2>Architecture</h2>
          {/* <p>
            Managing and executing with the three E's of sustainability;
            Economy, Ecology, and Equity, our architecture always blends with
            nature. The need to have long-term development comes with great
            planning and has implemented green space management.
          </p> */}
        </div>
        <div className="service-item">
          <img src={contract} alt="Contract services" />
          <h2>Contract</h2>
          {/* <p>
            We have a proper team to get the best possible outcome out of our
            projects. Timely execution is one of the chief services that we
            offer. The product sources are very well defined and groomed for a
            better experience.
          </p> */}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Services;
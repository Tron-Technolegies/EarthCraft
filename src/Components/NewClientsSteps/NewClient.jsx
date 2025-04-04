import React, { useState } from "react";
import "./NewClient.css";
import talkwithdesigner from "../../assets/meet_designer.jpg";
import book_earthcraft from "../../assets/book_earthcraft.jpg";
import design_finalization from "../../assets/design_finalization.jpg";
import cost_planning from "../../assets/cost_planning.jpg";
import make_it_happen from "../../assets/project_completion.jpg";
import whatsapplogo from "../../assets/whatsapp_logo.png"; 
import PopupForm from "../PopupForm/PopupForm";

const NewClient = () => {
  const [showPopup, setShowPopup] = useState(false);
  const phoneNumber = "918943626262"; 
  const standardMessage = "Hello, I would like to know more about your services";

  const steps = [
    { number: 1, title: "Talk with Designer", image: talkwithdesigner },
    { number: 2, title: "Book Earthcraft", image: book_earthcraft },
    { number: 3, title: "Design finalization", image: design_finalization },
    { number: 4, title: "Cost planning", image: cost_planning },
    { number: 5, title: "Make It Happen", image: make_it_happen },
  ];

  const stepsDetail = [
    {
      id: 1,
      title: "Talk with Designer",
      image: talkwithdesigner,
      steps: [
        {
          heading: "Share your ideas and needs with our designer",
          button: "Connect now",
        },
      ],
    },
    {
      id: 2,
      title: "Book Earthcraft",
      image: book_earthcraft,
      steps: [
        {
          heading:
            "Once you are satisfied with the proposal, an advance payment is to be made for the next process.",
          button: "View Packages",
        },
      ],
    },
    {
      id: 3,
      title: "Design Finalization",
      image: design_finalization,
      steps: [
        {
          heading:
            "Finalize a design that is best suited to your needs and expectations.",
          button: "Learn more",
        },
      ],
    },
    {
      id: 4,
      title: "Cost Planning",
      image: cost_planning,
      steps: [
        {
          heading: "We'll give you a detailed POQ as per your designed choice.",
          button: "Plan your budget",
        },
      ],
    },
    {
      id: 5,
      title: "Make It Happen",
      image: make_it_happen,
      steps: [
        {
          heading:
            "And now, let your dream become reality. The process of bringing it to life begins, where your home is built with love and precision.",
          button: "Get started",
        },
      ],
    },
  ];

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(standardMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="dream-home-container">
      <div className="dream-home-header">
        <div className="header-line"></div>
        <h2>5 Steps to Your Dream Home</h2>
      </div>

      <p className="dream-home-subheading">
        Looking to design your home interiors? Here's how you can get started.
      </p>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={step.number} className="step-item">
            <div className="step-image-container">
              <img src={step.image} alt={step.title} className="step-image" />
            </div>
            <div className="step-content">
              <span className="step-number">{step.number}</span>
              <span className="step-title">{step.title}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="step-connector">
                <div className="dotted-line"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="cta-container">
        <button 
          className="cta-button whatsapp-btn" 
          onClick={handleWhatsAppClick}
        >
          <img src={whatsapplogo} alt="WhatsApp" className="whatsapp-icon" />
          START YOUR PROJECT NOW
        </button>
      </div>

      {/* Detailed Steps */}
      <div className="detailed-steps-container">
        {stepsDetail.map((stepDetail) => (
          <div key={stepDetail.id} className="detailed-step">
            <div className="detailed-step-left">
              <img
                src={stepDetail.image}
                alt={stepDetail.title}
                className="detailed-step-image"
              />
            </div>
            <div className="detailed-step-right">
              <h2 className="detailed-step-title">{stepDetail.title}</h2>

              <div className="detailed-step-content">
                {stepDetail.steps.map((item, index) => (
                  <div key={index} className="step-point">
                    <div className="step-bullet"></div>
                    <div className="step-info">
                      <h3 className="step-heading">{item.heading}</h3>
                      <button
                        className="step-action-button"
                        onClick={handleWhatsAppClick}
                      >
                        {item.button}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Form */}
      {showPopup && <PopupForm onClose={closePopup} />}
    </div>
  );
};

export default NewClient;

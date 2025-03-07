import React from "react";
import "../WhatsApp/WhatsApp.css";
import whatsapplogo from "../../assets/whatsapp_logo.png";

const WhatsApp = () => {
  const phoneNumber = "+919539711107";
  
  const handleWhatsAppClick = () => {
    const message = "Hello";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="whatsapp-container">
      <button 
        className="whatsapp-button" 
        onClick={handleWhatsAppClick}
        aria-label="Chat on WhatsApp"
      >
        <img src={whatsapplogo} alt="WhatsApp Logo" />
      </button>
    </div>
  );
};

export default WhatsApp;
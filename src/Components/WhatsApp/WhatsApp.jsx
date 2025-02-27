import React from "react";
import "../WhatsApp/WhatsApp.css";
import whatsapplogo from "../../assets/whatsapp_logo.png";

const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+959139711107";
    const message = "Hello";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="whatsapp-container">
      <div className="whatsapp-button" onClick={handleWhatsAppClick}>
        <img src={whatsapplogo} />
      </div>
    </div>
  );
};

export default WhatsApp;

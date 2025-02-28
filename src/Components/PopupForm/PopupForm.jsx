import React, { useState, useEffect } from "react";
import "../PopupForm/PopupForm.css";

const Popupform = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone field
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    const phoneNumber = "+959139711107";
    const whatsappMessage = `Hello, I want to contact you!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");

    setIsOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      {/* <button className="popup-trigger-button" onClick={() => setIsOpen(true)}>
        Contact Us
      </button> */}

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h2>Contact Us</h2>
              <button onClick={() => setIsOpen(false)} className="close-button">
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9+\-\s]+"
                  title="Please enter a valid phone number"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popupform;
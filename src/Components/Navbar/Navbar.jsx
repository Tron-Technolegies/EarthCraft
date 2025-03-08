import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import earthcraftlogo from "../../assets/earthcraftlogo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "918943626262";
    const message = "Hello, I would like to know more about your services.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="navbar">
      <div className="nav_left_side">
        <img src={earthcraftlogo} alt="Earthcraft Logo" />
      </div>

      <div className="mobile_menu_toggle" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? (
          <IoMdClose size={30} color="#6c6a3d" />
        ) : (
          <GiHamburgerMenu size={30} color="#6c6a3d" />
        )}
      </div>

      <div className={`nav_rightside ${mobileMenuOpen ? "active" : ""}`}>
        <button className="nav_contact" onClick={handleWhatsAppContact}>
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Navbar;

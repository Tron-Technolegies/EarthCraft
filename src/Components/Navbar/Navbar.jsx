import React, { useState } from "react";
import "../Navbar/Navbar.css";
import earthcraftlogo from "../../assets/earthcraftlogo.png";

// Navbar icons
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
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
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

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

     
      {/* <div className={`nav_menus ${mobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#hero" onClick={toggleMobileMenu}>Home</a></li>
          <li><a href="#projects" onClick={toggleMobileMenu}>Projects</a></li>
          <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
          <li><a href="#services" onClick={toggleMobileMenu}>Services</a></li>
          <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
        </ul>
      </div> */}

      
      <div className={`nav_rightside ${mobileMenuOpen ? "active" : ""}`}>
        {/* <li><FaInstagramSquare size={30} color="#6c6a3d" /></li>
        <li><FaLinkedin size={30} color="#6c6a3d" /></li>
        <li><MdEmail size={30} color="#6c6a3d" /></li> */}
        
        
        <button className="nav_contact" onClick={handleWhatsAppContact}>
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Navbar;

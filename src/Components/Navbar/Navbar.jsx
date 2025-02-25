import React from "react";
import "../Navbar/Navbar.css";
import earthcraftlogo from "../../assets/earthcraftlogo.png";
//navbar icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_left_side">
        <img src={earthcraftlogo} alt="" srcset="" />
      </div>
      <div className="nav_menus">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav_rightside">
        <li><FaInstagram size={30} color="#6c6a3d"/></li>
        <li><FaLinkedin size={30} color="#6c6a3d"/></li>
        <li><MdEmail size={30} color="#6c6a3d"/></li>
      </div>
    </div>
  );
};

export default Navbar;

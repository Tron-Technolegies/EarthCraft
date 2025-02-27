import React from "react";
import "../About/About.css";
import aboutsectionimage from "../../assets/aboutsectionimage.jpg";

const About = () => {
  return (
    <div className="aboutsection">
      <div className="about_section_left_side">
        <img src={aboutsectionimage} alt="About Caletal developers" />
      </div>
      
      <div className="about_section_right_side">
        <h2>About us</h2>
        <p>
          Caletal developers always have the solution when it comes to creating
          grandeur in architectural plans and structures. A team of professional
          engineers and architects with an experience of 10 years in the field
          of construction, experienced supervisors, and expert laborers creates
          a precedent landmark in our constructions. With proper budget
          planning, we make sure the cost and quality of the material is
          proportional, and most importantly we do not compromise on the quality
          of our projects.
        </p>
        <button className="about_know_more_btn" onClick={() => window.location.href='https://caletal.com/'}>
          Know More
        </button>
       
      </div>
     
    </div>
  );
};

export default About;
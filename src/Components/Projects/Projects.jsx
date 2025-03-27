import React, { useState, useEffect } from "react";
import "../Projects/Projects.css";

import interenationalconventioncenter1 from "../../assets/international_convention_center.jpg";
import interenationalconventioncenter2 from "../../assets/international_convention_center_second_img.jpg";

import zaitoon1 from "../../assets/zaitoon.jpg";
import zaitoon2 from "../../assets/zaitoon_second.jpg";
import zaitoon3 from "../../assets/zaitoon_third.jpg";

import dayahospital1 from "../../assets/daya_hospital.jpg";
import dayahospital2 from "../../assets/dayahospital2.jpg";
import dayahospital3 from "../../assets/dayahospital3.jpg";
import dayahospital4 from "../../assets/dayahospital4.jpg";

import premier_healths1 from "../../assets/premier_healths.jpg";
import premier_healths2 from "../../assets/premier_healths2.jpg";
import premier_healths3 from "../../assets/premier_healths3.jpg";
import premier_healths4 from "../../assets/premier_healths4.jpg";
import premier_healths5 from "../../assets/premier_healths5.jpg";

import trinity7d1 from "../../assets/trinity7d.jpg";
import trinity7d2 from "../../assets/trinity7d2.jpg";
import trinity7d3 from "../../assets/trinity7d3.jpg";
import trinity7d4 from "../../assets/trinity7d4.jpg";

import swarga1 from "../../assets/swarga.jpg";
import swarga2 from "../../assets/swarga2.jpg";
import swarga3 from "../../assets/swarga3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      images: [
        interenationalconventioncenter1,
        interenationalconventioncenter2,
      ],
      location: "Kannur, Kerala",
      title: "International Convention Center",
      url: "https://caletal.com/d2b-project/convention-centre/",
    },
    {
      id: 2,
      images: [zaitoon1, zaitoon2, zaitoon3],
      location: "Thrissur, Kerala",
      title: "Zaitoon Restaurant",
      url: "https://caletal.com/d2b-project/zaitoon-restuarant-ongoing/",
    },
    {
      id: 3,
      images: [dayahospital1, dayahospital2, dayahospital3, dayahospital4],
      location: "Thrissur, Kerala",
      title: "Daya Hospital",
      url: "https://caletal.com/d2b-project/daya-hospital/",
    },
    {
      id: 4,
      images: [
        premier_healths1,
        premier_healths2,
        premier_healths3,
        premier_healths4,
        premier_healths5
      ],
      location: "Thrissur, Kerala",
      title: "Premier Lab",
      url: "https://caletal.com/d2b-project/premier-lab-ongoing/",
    },
    {
      id: 5,
      images: [
        trinity7d1,
        trinity7d2,
        trinity7d3,
        trinity7d4
      ],
      location: "Thrissur, Kerala",
      title: "Trinity 7D",
      url: "https://caletal.com/d2b-project/trinity-7d-apartment-ongoing/",
    },
    {
      id: 6,
      images: [
        swarga1,
        swarga2,
        swarga3
      ],
      location: "Thrissur, Kerala",
      title: "Swarga",
      url: "https://caletal.com/d2b-project/thomsons-resort/",
    },
  ];

 
  const ProjectCarousel = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % project.images.length
        );
      }, 2500); 

  
      return () => clearInterval(interval);
    }, [project.images.length]);

    return (
      <div className="project-image-container">
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="project-image"
            />
          </a>
        ) : (
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="project-image"
          />
        )}
        
        <div className="image-navigation">
          {project.images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImageIndex ? "active" : ""}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="projectssection">
      <div className="projectsection_main_content">
        <h2>
          Turning Spaces into Stories – Designed for Life, Built with Heart
        </h2>
      </div>

      <div className="featured_products_content">
        <h2>Upcoming Projects</h2>
        <p>
          Explore our newest villas and interiors, designed to bring beauty,
          comfort, and style to life.
        </p>
        <button
          className="viewallproducts"
          onClick={() =>
            (window.location.href = "https://caletal.com/d2b-projects/")
          }
        >
          SEE ALL PROJECTS
        </button>
      </div>

      <div className="design-showcase">
        <div className="showcase-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <ProjectCarousel project={project} />
              <div className="project-info">
                <p className="project-location">{project.location}</p>
                <h2 className="project-title">{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

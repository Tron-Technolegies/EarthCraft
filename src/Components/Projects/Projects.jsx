import React, { useState, useEffect } from "react";
import "../Projects/Projects.css";



import zaitoon1 from "../../assets/zaitoon/Zaitoon.jpg";
import zaitoon2 from "../../assets/zaitoon/zaitoon_second.jpg";
import zaitoon3 from "../../assets/zaitoon/zaitoon_third.jpg";

import thottam from "../../assets/thottam/thottam.jpg";
import thottam1 from "../../assets/thottam/thottam_1.jpg";
import thottam2 from "../../assets/thottam/thottam_2.jpg";
import thottam3 from "../../assets/thottam/thottam_3.jpg";

import thomsoncasa from "../../assets/thomsoncasa/thomsoncasa.jpg";
import thomsoncasa1 from "../../assets/thomsoncasa/thomsoncasa_2.jpg";
import thomsoncasa2 from "../../assets/thomsoncasa/thomsoncasa_3.jpg";
import thomsoncasa3 from "../../assets/thomsoncasa/thomsoncasa_4.jpg";
import thomsoncasa4 from "../../assets/thomsoncasa/thomsoncasa_5.jpg";
import thomsoncasa5 from "../../assets/thomsoncasa/thomsoncasa_6.jpg";

import everydaybakes from "../../assets/everydaybakes/everydaybakes.jpg";
import everydaybakes1 from "../../assets/everydaybakes/everydaybakes_1.jpg";
import everydaybakes2 from "../../assets/everydaybakes/everydaybakes_2.jpg";
import everydaybakes3 from "../../assets/everydaybakes/everydaybakes_3.jpg";



import trinity7d1 from "../../assets/trinity7d.jpg";
import trinity7d2 from "../../assets/trinity7d2.jpg";
import trinity7d3 from "../../assets/trinity7d3.jpg";
import trinity7d4 from "../../assets/trinity7d4.jpg";

import suta from "../../assets/suta/suta.jpg";
import suta1 from "../../assets/suta/suta_1.jpg";
import suta2 from "../../assets/suta/suta_2.jpg";  
import suta3 from "../../assets/suta/suta_3.jpg";


const Projects = () => {
  const projects = [
    {
      id: 1,
      images: [zaitoon1, zaitoon2, zaitoon3],
      
      title: "Zaitoon Restaurant",
      url: "https://caletal.com/d2b-project/zaitoon-restuarant-ongoing/",
    },
    {
      id: 2,
      images: [
        thottam,thottam1,thottam2,thottam3
      ],
      
      title: "Thottam",
      url: "https://caletal.com/d2b-project/thottam-completed/",
    },

    {
      id: 3,
      images: [thomsoncasa, thomsoncasa1, thomsoncasa2, thomsoncasa3,thomsoncasa4,thomsoncasa5],
      
      title: "Thomson's Casa",
      url: "https://caletal.com/d2b-project/thomsons-casa-completed/",
    },
    {
      id: 4,
      images: [
        everydaybakes,everydaybakes1,everydaybakes2,everydaybakes3
      ],
      
      title: "Everyday Bakes",
      url: "https://caletal.com/d2b-project/everyday-bakes-ollur-completed/",
    },
    {
      id: 5,
      images: [trinity7d1, trinity7d2, trinity7d3, trinity7d4],
      
      title: "Trinity 7D",
      url: "https://caletal.com/d2b-project/trinity-7d-apartment-ongoing//",
    },
    {
      id: 6,
      images: [suta, suta1, suta2, suta3],
      
      title: "Suta",
      url: "https://caletal.com/d2b-project/sutta-completed/",
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
              className="project-image" loading="lazy"
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
        <h2>Our Projects</h2>
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

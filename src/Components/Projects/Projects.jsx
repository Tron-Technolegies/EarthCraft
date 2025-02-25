import React from "react";
import "../Projects/Projects.css";
import thomsoncasa from "../../assets/ThomsonCasa.jpg";
import zaitoon from "../../assets/Zaitoon.jpg";
import thottam from "../../assets/thottam.jpeg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: thomsoncasa,
      location: "Thrissur, Kerala",
      title: "THOMSONS CASA",
    },
    {
      id: 2,
      image: zaitoon,
      location: "Mumbai, Maharashtra",
      title: "Zaitoon Restaurant",
    },
    {
      id: 3,
      image: thottam,
      location: "Mumbai, Maharashtra",
      title: "Thottam",
    },
    {
      id: 3,
      image: thottam,
      location: "Mumbai, Maharashtra",
      title: "Zaitoon Restaurant",
    },
    ,
    {
      id: 3,
      image: thottam,
      location: "Mumbai, Maharashtra",
      title: "Zaitoon Restaurant",
    }
  ];

  return (
    <div className="projectssection">
      <div className="projectsection_main_content">
        <h2>
          Leading global construction company, building excellence and
          transforming skylines since 2014.
        </h2>
      </div>

      <div className="featured_products_content">
        <h2>Featured Projects</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ex{" "}
          <br />
          dignissimos eaque doloremque? Ex cupiditate tenetur pariatur sunt,
          atque laudantium.
        </p>
        <button href="https://caletal.com/">SEE ALL PROJECTS</button>
      </div>

      <div className="design-showcase">
        <div className="showcase-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <p className="project-location">{project.location}</p>
                <h2 className="project-title">{project.title}</h2>
                {/* <hr /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

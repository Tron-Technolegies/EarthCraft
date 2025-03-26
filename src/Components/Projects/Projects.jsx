import React from "react";
import "../Projects/Projects.css";
// import thomsoncasa from "../../assets/ThomsonCasa.jpg";
import zaitoon from "../../assets/zaitoon.jpg";
// import thottam from "../../assets/thottam.jpeg";
import interenationalconventioncenter from "../../assets/international_convention_center.jpg";
import dayahospital from "../../assets/daya_hospital.jpg";
import premier_healths from "../../assets/premier_healths.jpg";
import trinity7d from "../../assets/trinity7d.jpg";
import swarga from "../../assets/swarga.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: interenationalconventioncenter,
      location: "Kannur, Kerala",
      title: "International Convention Center",
      url: "https://caletal.com/d2b-project/convention-centre/",
    },
    {
      id: 2,
      image: zaitoon,
      location: "Thrissur, Kerala",
      title: "Zaitoon Restaurant",
      url: "https://caletal.com/d2b-project/zaitoon-restuarant-ongoing/",
    },
    {
      id: 3,
      image: dayahospital,
      location: "Thrissur, Kerala",
      title: "Daya Hospital",
      url: "https://caletal.com/d2b-project/daya-hospital/",
    },
    {
      id: 4,
      image: premier_healths,
      location: "Thrissur, Kerala",
      title: "Premier Lab",
      url: "https://caletal.com/d2b-project/premier-lab-ongoing/",
    },
    {
      id: 5,
      image: trinity7d,
      location: "Thrissur, Kerala",
      title: "Trinity 7D",
      url: "https://caletal.com/d2b-project/trinity-7d-apartment-ongoing/",
    },
    {
      id: 6,
      image: swarga,
      location: "Thrissur, Kerala",
      title: "Swarga",
      url: "https://caletal.com/d2b-project/thomsons-resort/",
    }
  ];

  return (
    <div className="projectssection">
      <div className="projectsection_main_content">
        <h2>
        Turning Spaces into Stories – Designed for Life, Built with Heart
        </h2>
      </div>

      <div className="featured_products_content">
        <h2>Upcoming Projects</h2>
        <p>
        Explore our newest villas and interiors, designed to bring beauty, comfort, and style to life.
        </p>
        <button className="viewallproducts" onClick={() => window.location.href = 'https://caletal.com/d2b-projects/'}>
          SEE ALL PROJECTS
        </button>
      </div>

      <div className="design-showcase">
        <div className="showcase-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                )}
              </div>
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

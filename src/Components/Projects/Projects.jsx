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
    },
    {
      id: 2,
      image: zaitoon,
      location: "Thrissur, Kerala",
      title: "Zaitoon Restaurant",
    },
    {
      id: 3,
      image: dayahospital,
      location: "Thrissur, Kerala",
      title: "Daya Hospital",
    },
    {
      id: 4,
      image: premier_healths,
      location: "Thrissur, Kerala",
      title: "Premier Healths",
    },
    {
      id: 5,
      image: trinity7d,
      location: "Thrissur, Kerala",
      title: "Trinity 7D",
    },
    {
      id: 6,
      image: swarga,
      location: "Thrissur, Kerala",
      title: "Swarga",
    }
  ];

  return (
    <div className="projectssection">
      <div className="projectsection_main_content">
        <h2>
          A Leading global construction company, building excellence and
          transforming skylines since 2014.
        </h2>
      </div>

      <div className="featured_products_content">
        <h2>Upcoming Projects</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ex
          dignissimos eaque doloremque? Ex cupiditate tenetur pariatur sunt,
          atque laudantium.
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
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
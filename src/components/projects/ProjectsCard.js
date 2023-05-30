import React, { useState } from 'react';
import './ProjectsCard.css';


const ProjectCard = ({ project }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <>
    
    <div className="project-card">
      
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <button onClick={toggleDescription}>Description</button>
      {showDescription && (
        <div className="description-card">
          <button className="close-btn" onClick={toggleDescription}>
          <i className="uil uil-times"></i>
          </button>
          <p>{project.description}</p>
        </div>
      )}
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
      <i class="uil uil-github-alt"></i> Source Code
      </a>
      <a href={project.previewLink} target="_blank" rel="noopener noreferrer">
        Preview
      </a>
    </div>
    </>
  );
};
export default ProjectCard;
import React from 'react';
import './Skills.css';
import Services from './Services';
const Skills = () => {
  return (
    <>
    <div className="skills-container">
      <div className="column"
      class="animate__animated animate__fadeInLeftBig"
      >
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-description">As a Frontend developer, I possess the following skills:</p>
        <a href='#projects'>
        <button className="projects-button">See Projects</button>
        </a>

        
      </div>
      <div className="column"
      class="animate__animated animate__slideInDown"
      >
        <h3 className="skills-subtitle">Skills</h3>
        <ol className="skills-list">
          <li>
            
            HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Version control using (Git & Github)</li>
          <li>UI / UX Design using (Figma)</li>
        </ol>
      </div>
      <div className="column"
      class="animate__animated animate__fadeInRightBig"
      >
        <h3 className="certifications-subtitle">Online Certifications</h3>
        <ul className="certifications-list">
          <li>
            <a href="https://coursera.org/share/670ed49a68b6a80afcbdd6508594a53f" target="_blank" rel="noopener noreferrer">HTML & CSS</a>
          </li>
          <li>
            <a href="https://coursera.org/share/25782d58733f7c30a69791eead9ed40b" target="_blank" rel="noopener noreferrer">Programming With Javascript</a>
          </li>
          <li>
            <a href="https://coursera.org/share/d611f6efec5bfd2bae260a840e883b01" target="_blank" rel="noopener noreferrer">React Basics</a>
          </li>
          <li>
            <a href="https://coursera.org/share/8ad629554c78b7bf4fbd1f510f57e138" target="_blank" rel="noopener noreferrer">Advanced React</a>
          </li>
          <li>
            <a href="https://coursera.org/share/523c6821b2b9f57149e9d130039254f8" target="_blank" rel="noopener noreferrer">Version Control</a>
          </li>
          <li>
            <a href="https://coursera.org/share/445c484902926679936bc2fe8f82938a" target="_blank" rel="noopener noreferrer">UX UI Design</a>
          </li>
          <li>
            <a href="https://coursera.org/share/4f8104e6220dbd7809d237c5cc53a031" target="_blank" rel="noopener noreferrer">Meta Front-End Developer</a>
          </li>
          <li>
            <a href="https://coursera.org/share/cf7a43e33ac6c33546328c0aedf044e0" target="_blank" rel="noopener noreferrer">Programming in Python</a>
          </li>
        </ul>
      </div>
     
    </div>
    <Services />
    </>
  );
};

export default Skills;

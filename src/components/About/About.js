import React from 'react';
import './About.css';
import pic from '../../assets/pic.jpg';
import 'animate.css'
const About = () => {
  const handleDownloadResume = () => {
    const resumeURL = require('../../Resume/My-resume.pdf');
    window.open(resumeURL, '_blank');
  };
  

  return (
    <section className="about section" id="about">
      <div className="about__header"
      animate__fadeInLeft
      >
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
      </div>
      <div className="about__container container grid">
        <div className="about__data"
        class="animate__animated animate__slideInLeft"
        >
          <p className="about__description"
        
          >
            Frontend Dev, I create stunning and user-friendly digital experiences, combining coding skills with a strong design foundation. Problem solver with a focus on optimization and innovation, continuously learning and staying up to date with emerging technologies.
          </p>
          <button className="about__button" onClick={handleDownloadResume}>
            Resume
            
          </button>
        </div>
        <div className="about__image"
        class="animate__animated animate__slideInRight"
        >
          <img className="image" src={pic} alt="profile" />
        </div>
      </div>
      
      
    </section>
  );
};

export default About;

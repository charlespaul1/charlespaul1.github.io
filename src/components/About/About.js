import React from 'react';
import './About.css';
import pic from '../../assets/pic.jpg';
// import ScrollDown from '../home/scrollDown';
const About = () => {
  const handleDownloadResume = () => {
    const resumeURL = require('../../Resume/My-resume.pdf');
    window.open(resumeURL, '_blank');
  };
  

  return (
    <section className="about section" id="about">
      <div className="about__header">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
      </div>
      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            Frontend Dev, I create stunning and user-friendly digital experiences, combining coding skills with a strong design foundation. Problem solver with a focus on optimization and innovation, continuously learning and staying up to date with emerging technologies.
          </p>
          <button className="about__button" onClick={handleDownloadResume}>
            Resume
            
          </button>
        </div>
        <div className="about__image">
          <img className="image" src={pic} alt="profile" />
        </div>
      </div>
      <div className='scroll'>
        
      </div>
      
    </section>
  );
};

export default About;

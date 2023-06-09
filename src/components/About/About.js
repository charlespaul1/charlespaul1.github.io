import React, { useEffect, useState } from 'react';
import './About.css';
import pic from '../../assets/pic.jpg';
import 'animate.css';

const About = () => {
  const [animate, setAnimate] = useState(false);

  const handleDownloadResume = () => {
    const resumeURL = require('../../Resume/My-resume.pdf');
    window.open(resumeURL, '_blank');
  };

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    const aboutSectionPosition = aboutSection.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;
    if (aboutSectionPosition < windowHeight) {
      setAnimate(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about section" id="#about">
      <div className="about__header">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
      </div>
      <div className={`about__container container grid ${animate ? 'animate__animated animate__fadeInUp' : ''}`}>
        <div className="about__data">
          <p className="about__description">
            I'm a Frontend Developer, I create stunning and user-friendly digital experiences, combining coding skills with a
            strong design foundation. A Problem solver with a focus on optimization and innovation, continuously learning
            and staying up to date with emerging technologies.
          </p>
          <button className="about__button" onClick={handleDownloadResume}>
            Resume
          </button>
        </div>
        <div className={`about__image ${animate ? 'animate__animated animate__slideInLeft' : ''}`}>
          <img className="image" src={pic} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default About;

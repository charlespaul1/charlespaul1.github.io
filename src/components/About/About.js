import React from 'react';
import './About.css';
import pic from '../../assets/pic.jpg';

const About = () => {
  const handleDownloadResume = () => {
    const resumeURL = '';
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
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 52 52" id="cv"><g fill="none" 
            className='about__button-svg'
            stroke="#fff" 
            stroke-linecap="round" 
            stroke-linejoin="round" stroke-miterlimit="10" 
            stroke-width="2"><path d="M29.808 2H10.086c-.885 0-1.603.718-1.603 1.603v44.794c0 .885.718 1.603 1.603 1.603h31.828c.885 0 1.603-.718 1.603-1.603V15.094"></path><path d="M29.808 2v11.49c0 .886.718 1.604 1.603 1.604h12.106L29.808 2zM13.985 7.936h9.776v7.594h-9.776zM26 21.444h11.96M14.041 28.783H37.96M14.041 36.123H37.96M14.041 43.462H37.96"></path></g></svg>
          </button>
        </div>
        <div className="about__image">
          <img className="image" src={pic} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default About;

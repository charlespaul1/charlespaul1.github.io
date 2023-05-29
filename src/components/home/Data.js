import React from 'react';
import './Data.css'
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Hello{' '}
      
        <span className="home__title-color">  ,  I'm Charlespaul Wabomba</span>
        <br />
      
      </h1>
      
      <h3 className="home__subtitle">Frontend Developer - UI/UX Designer</h3>
      <p className="home__description">
        I'm a Frontend Developer based in Nairobi, Kenya. I have passion for web development and love to create web and mobile applications for devices.
      </p>
      <a href="#contact" className="button button--flex">
      <span className="button-text">Contact Me</span>
              </a>
    </div>
  );
};

export default Data;

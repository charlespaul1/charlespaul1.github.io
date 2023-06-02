import React from 'react';
import './Data.css'
import 'animate.css';
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title"
      class="animate__animated animate__fadeInDownBig"
      >
        Hello{' '}
      
        <span className="home__title-color">  ,  I'm Charlespaul Wabomba</span>
        <br />
      
      </h1>
      
      <h3 className="home__subtitle"
      class="animate__animated animate__fadeInDownBig"
      >Frontend Developer - UI/UX Designer</h3>
      <p className="home__description"
      class="animate__animated animate__fadeInRight"
      >
        I'm a passionate and motivated Front-end developer with a keen eye for creating 
        visually appealing, functional and user- friendly Front-end user interfaces. Having a solid foundation in 
        HTML5, CSS3, JavaScript (ES6), React and Figma. I am also a team player who is always ready to learn and share my knowledge with others.

      </p>
      <a href="#contact" className="button button--flex">
      <span className="button-text">Contact Me</span>
              </a>
    </div>
  );
};

export default Data;

import React from 'react';
import './Data.css'
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Hello{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          id="hand-waving"
          style={{ width: '40px', height: '40px' }}
        >
          <rect width="256" height="256" fill="none"></rect>
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
            d="M119.99332,106.41921l-26-45.03332a20,20,0,0,1,34.641-20l40,69.282"
          ></path>
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12" 
            d="M89.35231,133.34742l-38-65.81793a20,20,0,1,1,34.641-20l34,58.88972"
          ></path>
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12" 
            d="M153.99332 165.30894a40 40 0 0 1 14.641-54.641l-10-17.32051a20 20 0 1 1 34.641-20l20 34.641a80 80 0 1 1-138.56406 80l-38-65.81793a20 20 0 0 1 34.641-20l18 31.17692M176 22.99A59.97614 59.97614 0 0 1 227.96152 53M66.93521 240.00025A119.74962 119.74962 0 0 1 40.0943 207.99"
          ></path>
        </svg>
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

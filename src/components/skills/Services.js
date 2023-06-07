import React from 'react';
import './service.css'
import ui from './ui.png'
import window from './window.png'
const Services = () => {
  return (
    <div className="services-container"
    >
      <h2 className="services-title">What I Do</h2>
      <div className="cards-container"
      
      >
        <div className="card">
          <div className="card__image"
          
          >
          <img src={window} height="40px" width="40px" alt="window" />
          </div>
          <h4 className="card-title">Frontend Developer</h4>
          <p className="card-description">I specialize in building responsive and interactive user interfaces using modern frontend technologies.</p>
        </div>
        <div className="card"
        
        >
          <div className="card__image"
          
          >
          <img src={ui} height="40px" width="40px" alt="ui" />
          </div>
          <h4 className="card-title">UI / UX Designer</h4>
          <p className="card-description">I create visually appealing and user-friendly designs, focusing on delivering seamless experiences.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;

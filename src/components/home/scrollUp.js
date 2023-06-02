import React from 'react';
import './scrollUp.css';

const ScrollUp = ({ scrollPath, currentView }) => {
  
  const isHome = currentView === 'home';
  
  if (isHome) return null;

  return (
    <div className='home__scroll' style={{ marginRight: '25px', marginTop: '100px' }}>
      <a href={scrollPath} className="home__scroll-button button--flex">
       
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="30" height="30" viewBox="0 0 24 24" 
        style={{
          animation: 'scrollAnimation 0.5s ease-in-out infinite alternate',
          
        }}
        id="arrow-upward"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
        
      </a>
    </div>
  );
};

export default ScrollUp;

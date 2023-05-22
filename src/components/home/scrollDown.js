import React from 'react';
import './scrollDown.css'
const ScrollDown = () => {
  return (
    <div className='home__scroll' style={{ marginLeft: '25px', marginTop: '100px' }}>
      <a href="#about" className="home__scroll-button button--flex">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          id="chevron-force-down"
          style={{
            animation: 'scrollAnimation 0.5s ease-in-out infinite alternate',
          }}
        >
          <path d="M6.25753788,13.2424621 C5.84748737,12.8324116 5.84748737,12.1675884 6.25753788,11.7575379 C6.66758839,11.3474874 7.33241161,11.3474874 7.74246212,11.7575379 L12,16.0150758 L16.2575379,11.7575379 C16.6675884,11.3474874 17.3324116,11.3474874 17.7424621,11.7575379 C18.1525126,12.1675884 18.1525126,12.8324116 17.7424621,13.2424621 L12.7424621,18.2424621 C12.3324116,18.6525126 11.6675884,18.6525126 11.2575379,18.2424621 L6.25753788,13.2424621 Z M6.25753788,7.24246212 C5.84748737,6.83241161 5.84748737,6.16758839 6.25753788,5.75753788 C6.66758839,5.34748737 7.33241161,5.34748737 7.74246212,5.75753788 L12,10.0150758 L16.2575379,5.75753788 C16.6675884,5.34748737 17.3324116,5.34748737 17.7424621,5.75753788 C18.1525126,6.16758839 18.1525126,6.83241161 17.7424621,7.24246212 L12.7424621,12.2424621 C12.3324116,12.6525126 11.6675884,12.6525126 11.2575379,12.2424621 L6.25753788,7.24246212 Z"></path>
        </svg>
      </a>
    </div>
  );
};

export default ScrollDown;

import React from 'react';
import './Social.css';

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.instagram.com/_i_am_charlespaul" className="home__social-icon instagram animate__animated">
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://github.com/charlespaul1" className="home__social-icon github animate__animated">
        <i className="uil uil-github-alt"></i>
      </a>
      <a href="https://twitter.com/Masikawabomba" className="home__social-icon twitter animate__animated">
        <i className="uil uil-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/in/charlespaul-wabomba-35b47522b/" className="home__social-icon linkedin animate__animated  animate__heartBeat">
        <i className="uil uil-linkedin"></i>
      </a>
    </div>
  );
}

export default Social;

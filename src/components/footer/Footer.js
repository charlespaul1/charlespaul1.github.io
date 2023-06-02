import React from "react";
import "./Footer.css"; // Style sheet for Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Charlespaul Masika Wabomba</h2>
        <h4>Front-End Developer</h4>
      </div>
      <div className="footer-section">
        <ul className="social-media-icons">
          <li>
          <a href="https://www.instagram.com/_i_am_charlespaul" className="home__social-icon">
            <i class="uil uil-instagram"></i>
        </a>
          </li>
          <li>
          <a href="https://github.com/charlespaul1" className="home__social-icon" >
        <i class="uil uil-github-alt"></i>
        </a>
          </li>
          <li>
          <a href="https://twitter.com/Masikawabomba" className="home__social-icon" >
        <i class="uil uil-twitter"></i>
        </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/charlespaul-wabomba-35b47522b/" className="home__social-icon" >
        <i class="uil uil-linkedin"></i>
        </a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <p>© Copyright All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

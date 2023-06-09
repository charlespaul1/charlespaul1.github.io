import React from "react";
import "./Footer.css";
import logo from "./logo.png"

const Footer = () => {
  return (
    <footer className="footer"
    
    >
      <div className="footer-section"
       class="animate__animated animate__slideInDown"
      >
        <h2>Charlespaul Masika Wabomba</h2>
        <h4>Frontend Developer</h4>
      </div>
      <div className="footer-section"
       class="animate__animated animate__slideInDown"
      >
        <ul className="social-media-icons">
          <li>
          <a href="https://www.instagram.com/_i_am_charlespaul" className="home__social-icon instagram">
            <i class="uil uil-instagram"></i>
        </a>
          </li>
          <li>
          <a href="https://github.com/charlespaul1" className="home__social-icon github" >
        <i class="uil uil-github-alt"></i>
        </a>
          </li>
          <li>
          <a href="https://twitter.com/Masikawabomba" className="home__social-icon twitter" >
        <i class="uil uil-twitter"></i>
        </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/charlespaul-wabomba-35b47522b/" className="home__social-icon linkedin" >
        <i class="uil uil-linkedin"></i>
        </a>
          </li>
        </ul>
      </div>
      <div className="footer-section"
       class="animate__animated animate__slideInDown"
      >
      <img src={logo}
      height="60px"
      width="60px"
      
      alt="logo"/>

        <p>© Copyright All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

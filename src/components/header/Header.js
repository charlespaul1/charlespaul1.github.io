import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [toggle, showMenu] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const handleToggle = () => {
    showMenu(!toggle);
    setShowLogo(!showLogo);
  };
  const [activeLink, setActiveLink] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(sectionId);
  };

  return (
    <header className="header">
      <nav className="nav container">
        {showLogo && (
          <a href="#home" className="nav__logo">
            Wabomba
          </a>
        )}

        <div
          className={`nav__toggle ${!showLogo ? 'hide' : ''}`}
          onClick={handleToggle}
        >
          <i className={`uil ${showLogo ? 'uil-apps' : 'uil-times'}`}></i>
        </div>

        <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
            <a
              href="#home"
              className={`nav__link ${activeLink === 'home' ? 'active-link' : ''}`}
              onClick={() => scrollToSection('home')}>
                <i className="uil uil-home nav__icon"></i>
                  Home
            </a>

              
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${activeLink === 'about' ? 'active-link' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${activeLink === 'skills' ? 'active-link' : ''}`}
                onClick={() => scrollToSection('skills')}
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
          
            <li className="nav__item">
              <a
                href="#projects"
                className={`nav__link ${activeLink === 'projects' ? 'active-link' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                <i className="uil uil-scenery nav__icon"></i>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${activeLink === 'contact' ? 'active-link' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={handleToggle}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

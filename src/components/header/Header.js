import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [toggle, showMenu] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const handleToggle = () => {
    showMenu(!toggle);
    setShowLogo(!showLogo);
  };

  return (
    <header className="header">
      <nav className="nav container">
        {showLogo && (
          <a href="index.html" className="nav__logo">
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
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-home nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#About" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
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

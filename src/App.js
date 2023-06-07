import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import ProjectsPage from './components/projects/Projects';
import Contact from '../src/components/contact/contact';
import ScrollUp from './components/home/scrollUp';
import Footer from './components/footer/Footer';


function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.pageYOffset;

      if (
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setCurrentView('home');
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < skillsSection.offsetTop
      ) {
        setCurrentView('about');
      } else if (
        scrollPosition >= skillsSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop
      ) {
        setCurrentView('skills');
      } else if (
        scrollPosition >= projectsSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setCurrentView('projects');
      } else if (scrollPosition >= contactSection.offsetTop) {
        setCurrentView('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      
      <main className="main">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="contact">
          
            <Contact />
          
        </section>
        <ScrollUp scrollPath="#home" currentView={currentView} />
        <Footer />
      </main>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import ProjectsPage from './components/projects/Projects';
import Contact from '../src/components/contact/contact'
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <>
      <Header />
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
          <ChakraProvider>
          <Contact />
          </ChakraProvider>
        </section>
      </main>
    </>
  );
}

export default App;

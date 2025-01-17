import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="bg-black text-white selection:bg-white/20 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
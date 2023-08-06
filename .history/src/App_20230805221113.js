import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Pokemon from './components/Jolteon'; // Assuming 'Jolteon.js' is inside the 'components' folder
import './style.css';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Pokemon /> {/* Include the Pokemon component */}
    </div>
  );
}

export default App;

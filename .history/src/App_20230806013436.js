import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './style.css';
import Main from './components/MainComponent';
function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Resume />
      <Contact />
     / <Main />
    </div>
  );
}

export default App;

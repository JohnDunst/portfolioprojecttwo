import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import {useEffect , useState} from 'react';

import './style.css'

function App ()  {

    return (
      <div className="app">
      <Header />
        <About />
        <Projects />
        <Resume />
        <Contact />


        <button></button>
  
    );




    </div>

  
export default App;
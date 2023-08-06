import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import {Jolt} from './Api'
import {useEffect , useState} from 'react';

import './style.css'

function App ()  {


    const [advice, setAdvice] = useState("");
  
    useEffect(() => {
      const url = "https://api.adviceslip.com/advice";
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json.slip.advice);
          setAdvice(json.slip.advice);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <Wrapper>
        <Description>{advice}</Description>
      </Wrapper>
    );
  };

    <div className="app">
      <Header />
        <About />
        <Projects />
        <Resume />
        <Contact />



    </div>

  }
export default App;
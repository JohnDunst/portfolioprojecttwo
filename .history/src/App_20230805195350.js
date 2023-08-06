import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import {Jolt} from './Api'
import detail  from './Detail';
import {useEffect , useState} from 'react';

import './style.css'

function App ()  {

  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [state, setState] = useState(); // Correct usage 




  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(json => setPokemons(json.results))
  }, [])


  return (
    <div> 
      
      <div className="Pokes">

<ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>
            <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>
          </li>
        ))}
      </ul>

      {selectedPokemon && <Detail name={selectedPokemon.name} url={selectedPokemon.url}/>}



</div>



    <div className="app">
      <Header />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Detail />


    </div>
    </div>
  );

  }
export default App;
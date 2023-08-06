import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './style.css'

      function App ()  {


  
          const [pokemons, setPokemons] = useState([]);
          const [selectedPokemon, setSelectedPokemon] = useState();
        
          useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon')
              .then(response => response.json())
              .then(json => setPokemons(json.results))
          }, [])
        
          return (
            <div className="App">
              <ul>
                {pokemons.map(pokemon => (
                  <li key={pokemon.name}>
                    <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>
                  </li>
                ))}
              </ul>
        
              {selectedPokemon && <Detail name={selectedPokemon.name} url={selectedPokemon.url}/>}
            </div>
          );
        }

  return (
    <div className="app">
      <Header />
        <About />
        <Projects />
        <Resume />
        <Contact />
    </div>
  );

  
export default App;
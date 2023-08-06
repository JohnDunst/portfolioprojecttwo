import React, { useState, useEffect } from "react";
import { Detail } from './Detail';

export default function Jolt() {
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

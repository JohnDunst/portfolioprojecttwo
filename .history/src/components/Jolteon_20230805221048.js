import React, { useEffect, useState } from "react"; // Import necessary modules

function Pokemon() {
  const [pokemon, setPokemon] = useState(null); // State for storing Pokemon data

  useEffect(() => {
    // Effect to run on component mount
    fetch('https://pokeapi.co/api/v2/pokemon/jolteon/') // Fetch data from PokeAPI
      .then(res => res.json()) // Convert response to JSON
      .then(res => {
        setPokemon(res); // Update 'pokemon' state with fetched data
      });
  }, []); // Empty dependency array ensures this effect runs only once

  const style = { textTransform: 'capitalize' }; // Style for text capitalization

  return (
    <div>
      {pokemon ? ( // Conditional rendering based on 'pokemon' state
        <>
          <img src={pokemon.sprites.front_default} alt={'Image of ' + pokemon.name} />
          <p style={style}>Name: {pokemon.name}</p>
          <p style={style}>Type: {pokemon.types.map(x => x.type.name).join(', ')}</p>
        </>
      ) : (
        'Loading...' // Displayed when data is being fetched
      )}
    </div>
  );
}

export default Pokemon; // Export the 'Pokemon' component
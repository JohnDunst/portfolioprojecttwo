import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.('https://pokeapi.co/api/v2/pokemon/jolteon')
      .then((response => response.json())
      .then((response) => {
        setPokemon(response);
      
  }, [])// empty array means nothing to watch, so run once and no more

  const style = { textTransform: 'capitalize' };

  return (
    <div>
      {pokemon ? (
        <>
          <img src={pokemon.sprites.front_default} alt={`Image of ${pokemon.name}`} />
          <p style={style}>Name: {pokemon.name}</p>
          <p style={style}>Type: {pokemon.types.map((x) => x.type.name).join(', ')}</p>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Pokemon;
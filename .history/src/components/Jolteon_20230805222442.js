import React, { useEffect, useState } from "react";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/jolteon')
      .then((response => response.json())
      .then((res) => {
        setPokemon(res);
      });
  }, []); // empty array means nothing to watch, so run once and no more

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
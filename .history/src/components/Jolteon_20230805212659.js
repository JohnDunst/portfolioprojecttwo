import React from "react";
import { useEffect, useState } from "react";


function Jolteon() {
    
    
    const [pokemon, setPokemon] = useState(null);
    
        useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/jolteon")
            .then((response) => response.json())
            .then((json) => setPokemon (json));
             },[]);


return(

    <div>
      {pokemon ? (
        <h1>{pokemon.name}</h1>
      ) : (
        <h1>{</h1>
      )}
    </div>
  );
}
    export default Jolteon
import React from "react";
import { useEffect, useState } from "react";


function Jolteon() {
    
    
    const [pokemon, setPokemon] = React.useState(null);
    
    React.useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/jolteon")
            .then((response) => response.json())
            .then((json) => setPokemon (data.jolteon));
             }


            return() =>{
     
               <h1>{pokemon.name}</h1>
               <img src={pokemon.sprites.front_default} />
            };
     }
    export default Jolteon
import React from "react";
import { useEffect, useState } from "react";


function Jolteon() {
    
    
    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/jolteon")
            .then((response) => response.json())
            .then((json) => setPokemon (data.jolteon));
             }


            return() =>{
     
               <h1>{Pokemon.name}</h1>
               <img src={Pokemon}
            };
     }
    export default Jolteon
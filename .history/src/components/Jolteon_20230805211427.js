import React from "react";
import { useEffect, useState } from "react";


function Jolteon() {
    
    
    const [Pokemon, setPokemon] = useState([]);
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/jolteon")
            .then((response) => response.json())
            .then((json) => setPokemon (data.jolteon));
             }


            return() =>{
     
               <h1>{Pokemon.name}</h1>
               <img
            };
     }
    export default Jolteon
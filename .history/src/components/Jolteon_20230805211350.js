import React from "react";
import { useEffect, useState } from "react";


function Jolteon() {
    
    
    const [jolteon, setPokemon] = useState([]);
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/jolteon")
            .then((response) => response.json())
            .then((json) => setPokemon (data.jolteon));
             }


 
            loadPokemon();
    },[]);
            return() =>{
     
               <h1>{loadPokemon}</h1>
            };
     }
    export default Jolteon
import React from "react";
import { useEffect, useState } from "react";


function Jolteon() {
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/jolteon")
            .then((response) => response.json())
            .then((data) => setPokemon (data.jolteon));
             }


    const [jolteon, setPokemon] = useState([]);
 
            loadPokemon();
    },[]);
            return() =>{
     
               <h1>{loadPokemon}</h1>
            };
     }
    export default Jolteon
import React from "react";
import { useEffect, useState } from "react";


function Pokemon() {
    function loadPokemon(){
        fetch("https://pokeapi.co/api/v2/pokemon/jolteon")
            .then((response) => response.json())
            .then((data) => setPokemon (data.jolteon));
             }


    const [jolteon, setPokemon] = useState([]);
    useEffect(() => {
            loadPokemon();
    },[]);
            return() =>{
     
               <div>{loadPokemon}<>
            };
     }
    export default Pokemon
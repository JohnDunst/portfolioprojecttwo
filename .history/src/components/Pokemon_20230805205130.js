import React from "react";
import { useEffect, useState } from "react";


function Pokemon() {
    function loadPokemon(){
        fetch("https://pokeapi.co/api/v2/pokemon/jolteon")
            .then((response) => response.json())
            .then((data) => console.log(data));
             }


    const [loadPokemon]
    useEffect(() => {loadPokemon()})

            return(
               <h1>poke</h1>
            )
     }
    export default Pokemon
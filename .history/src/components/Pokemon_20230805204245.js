import React from "react";
import { useEffect, useState } from "react";
import App from "../App";
function Pokemon() {
    function loadPokemon(){
        fetch("https://pokeapi.co/api/v2/pokemon/jolteon")
            .then((response) => response.json())
            .then(data => console.log(data));
             }
    useEffect(() => loadPokemon()});
}
import { useEffect } from "react";

function Pokemon() {
    function loadPokemon(){
        fetch(https://pokeapi.co/api/v2/pokemon/jolteon"")
            .then((response) => response.json())
            .then(data => console.log(data));
             }
    useEffect(() => loadPokemon()});
}
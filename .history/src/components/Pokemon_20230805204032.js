import { useEffect } from "react";

function Pokemon() {
    function loadPokemon(){
        fetch("")
            .then((response) => response.json())
            .then(data => console.log(data));
             }
    useEffect(() => loadPokemon())
}
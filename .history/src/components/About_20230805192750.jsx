import React from 'react';
import {useEffect , useState} from 'react';
import axios from 'axios';
import App from '../App';
import Api from '../Api';
import { Detail } from '../Detail';
import Jolt from '../Api';


export default function Jolt() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(json => setPokemons(json.results))
  }, []

    


function About  () {
    // Define the click event handler
    const handleClick = () => {
      // Call the function from the sourceFile when the button is clicked
      Jolt();
    };
  




  /*const [data,setData] = useState();
  const [name,setName] = useState();




URL= "https://pokeapi.co/api/v2/pokemon/jolteon"


useEffect(() => {
  axios.get(URL).then((response)=> {
    console.log(response.data)
    setData(response.data);
  }).catch((err) => {
    window.alert(err);
  })
},[])


    return(
        <div className="Pokemons">
            <h1>{name}</h1>


        </div>



    );
}
*/

return(    <section id="about">
<h2>About Me</h2>
      <div>
          <h1> hi </h1>
          <div>
  <button onClick={handleClick}>Click Me</button>
</div><div className="App">
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>
            <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>
          </li>
        ))}
      </ul>

      {selectedPokemon && <Detail name={selectedPokemon.name} url={selectedPokemon.url}/>}
    </div>
  );


      </div>
</section>
);
};
export default About
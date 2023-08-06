import React from 'react';
import {useEffect , useState} from 'react';
import '../style.css';
import axios from 'axios';
import App from '../App';
import Api from '../Api';
import { Detail } from '../Detail';
import Jolt from '../Api';

function About  () {



    // Define the click event handler
    const handleClick = () => {
      // Call the function from the sourceFile when the button is clicked
      Jolt();
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    );
    

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

return(<h1>fod</h1>);
export default About
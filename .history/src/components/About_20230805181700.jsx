import React from 'react';
import {useEffect , useState} from 'react';
import '../style.css';
import axios from 'axios';
import App from '../App';


function About  () {
  const [data,setData] = useState();
  const [name,setName] = useState();




URL= "https://pokeapi.co/api/v2/pokemon/jolteon"


useEffect(() => {
  axios.get(URL).then((response)=> {
    console.log(response.data)
    setData(response.data);
  }).catch((err) => {
    window.alert(err);
  })
},[URL])


    return(
        <div className="Pokemons">
            <h1>{name}</h1>


        </div>



    );
}

export default About
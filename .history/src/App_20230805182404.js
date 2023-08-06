import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './style.css'

      function App ()  {

            
            
          
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
},[])


    return(
        <div className="Pokemons">
            <h1>{name}</h1>


        </div>



    );
}
  
            
 




  return (
    <div className="app">
      <Header />
        <About />
        <Projects />
        <Resume />
        <Contact />
    </div>
  );

  }
export default App;
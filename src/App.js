
import './App.css';
import { useState } from 'react';
import Axios from "axios";
function App() {

  const[Name,setName] = useState("");
  const[chosen,setchosen] = useState(false);
  const[pokemon,setpokemon] = useState({

    name: "",
         species: "", 
         img: "", 
         hp: "",
         attack: "",
         defence:"",
        type: ""
  });

  const search = () =>{
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${Name}`).then((res)=>{


      setpokemon({name: Name,
         species: res.data.species.name, 
         img: res.data.sprites.front_default, 
         hp: res.data.stats[0].base_stat,
         attack: res.data.stats[1].base_stat,
         defence: res.data.stats[2].base_stat,
        type: res.data.types[0].type.name})
    }
    );

    setchosen(true);
  }

  return (
    <div className="App">
       <div className="title">
      <h1>POKEMON </h1>

    <input type="text" onChange={(event)=>{
      setName(event.target.value);
    }}/>
    <button onClick={search}>Search</button>

      </div>

    

    <div className='Display'>

      {chosen ? 
      
      <>
       
        <h1>{pokemon.name}</h1>
        <img src ={pokemon.img} alt="no img"/>
        <h4>TYPE : {pokemon.type}</h4>
        <h4>HP : {pokemon.hp}</h4>
        <h4>ATTACK : {pokemon.attack}</h4>
        <h4>DEFENCE : {pokemon.defence}</h4>
        </>
      
       
      
      
      : <h1>ENTER THE NAME OF A POKEMON</h1>}
    </div>



    </div>
  );
}

export default App;

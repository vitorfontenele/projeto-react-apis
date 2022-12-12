import { useState , useEffect} from 'react';
import axios from "axios";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./routes/Router";
import { BASE_URL } from "./constants/url";
import './App.css'

function App() {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetchPokelist();
  })

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      const data = response.data.results;
      setPokelist(data);
    } catch(error){
      console.log(error);
    }
  }

  const addToPokedex = () => {

  }

  const removeFromPokedex = () => {

  }

  const context = {
    pokelist,
    addToPokedex,
    pokedex,
    removeFromPokedex
  }

  return (
    <>
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </>
  )
}

export default App

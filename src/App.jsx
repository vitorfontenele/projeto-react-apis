import { useState , useEffect} from 'react';
import axios from "axios";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./routes/Router";
import { BASE_URL } from "./constants/url";
import './App.css'

function App() {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [detailedPokemon, setDetailedPokemon] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("");

  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      const data = response.data.results;
      setPokelist(data);
    } catch(error){
      console.log(error);
    }
  }

  const addToPokedex = (pokemon) => {
    const verifier = pokedex.filter(pokedexItem => pokedexItem.name === pokemon.name);

    if (verifier.length < 1){
      setPokedex([...pokedex, pokemon]);
      setAction("add");
      setShowModal(previous => !previous);
    }
  }

  const removeFromPokedex = (pokemon) => {
    const verifier = pokedex.filter(pokedexItem => pokedexItem.name === pokemon.name);

    if (verifier.length >= 1){
      const newPokedex = pokedex.filter(pokedexItem => pokedexItem.name !== pokemon.name);
      setAction("remove");
      setShowModal(previous => !previous);
      setPokedex(newPokedex);
    } else {
      setAction("failRemove");
      setShowModal(previous => !previous);
    }
  }

  const context = {
    pokelist,
    addToPokedex,
    pokedex,
    removeFromPokedex,
    detailedPokemon,
    setDetailedPokemon,
    showModal, 
    setShowModal,
    action
  }

  return (
      <GlobalContext.Provider value={context}>
          <Router />       
      </GlobalContext.Provider>
  )
}

export default App

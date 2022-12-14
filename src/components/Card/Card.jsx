import { useEffect , useState } from "react";
import axios from "axios";
import { PokemonSprite , CardContainer , LeftCardHalf, RightCardHalf , PokemonName } from "./styled";

const Card = (props) => {
    const {pokemonUrl, addToPokedex} = props;
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        try {
            const response = await axios.get(pokemonUrl);
            setPokemon(response.data);
            console.log(response.data);
        } catch(error){
            console.log("Erro ao pegar dados do Pokemon!");
            console.log(error)
        }
    }

    const firstLetterUpper = (str) => {       
        return str ? str[0].toUpperCase() + str.slice(1) : "";
      }

    return (
        <CardContainer>
            <LeftCardHalf>
                <PokemonName>{firstLetterUpper(pokemon.name)}</PokemonName>
            </LeftCardHalf>
            <RightCardHalf>
                <PokemonSprite src={pokemon.sprites?.other["official-artwork"]["front_default"]} />
            </RightCardHalf>
        </CardContainer>
    )
}

export default Card;
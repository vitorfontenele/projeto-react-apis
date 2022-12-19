import { useEffect , useState } from "react";
import axios from "axios";
import { 
    PokemonSprite, 
    CardContainer, 
    FirstCardRow, 
    SecondCardRow, 
    PokemonName, 
    PokemonNumber, 
    TypesContainer, 
    PokemonType,
    Pokeball,
    ActionButton,
    DetailsLink
} from "./styled";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnCardColor";
import pokeball from "/pngwing 2.png";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetails } from "../../routes/coordinator";

const Card = (props) => {
    const {pokemonUrl, addToPokedex, removeFromPokedex} = props;
    const [pokemon, setPokemon] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        try {
            const response = await axios.get(pokemonUrl);
            setPokemon(response.data);
            //console.log(response.data);
        } catch(error){
            console.log("Erro ao pegar dados do Pokemon!");
            console.log(error)
        }
    }

    const firstLetterUpper = (str) => {       
        return str ? str[0].toUpperCase() + str.slice(1) : "";
    }

    const configNumber = (index) => {
        return index < 10 ? `0${index}` : `${index}`;
    }

    const cardColor = () => {
        const pokemonTypes = pokemon.types;
        const firstPokemonType = pokemonTypes ? pokemonTypes[0] : {};
        const firstPokemonTypeName = firstLetterUpper(firstPokemonType.type?.name);
        return getColors(firstPokemonTypeName);
    }

    const renderButton = () => {
        switch (location.pathname){
            case "/":
                return (
                    <ActionButton 
                        color="black" 
                        bgColor="white" 
                        onClick={() => {addToPokedex(pokemon)}} >Capturar!</ActionButton>
                )
            case "/pokedex":
                return (
                    <ActionButton 
                        color="white" 
                        bgColor="#FF6262" 
                        onClick={() => {removeFromPokedex(pokemon)}} >Excluir</ActionButton>
                )
        }
    }

    return (
        <CardContainer color={cardColor()}>
            <FirstCardRow>
                <PokemonNumber>{`#${configNumber(pokemon.id)}`}</PokemonNumber>
                <PokemonName>{firstLetterUpper(pokemon.name)}</PokemonName>
                <TypesContainer>
                    {pokemon.types?.map((pokemonType, index) => {
                        const imageTypeLink = getTypes(firstLetterUpper(pokemonType.type.name));
                        return <PokemonType key={index} src={imageTypeLink} alt="" />;
                    })}
                </TypesContainer>
            </FirstCardRow>
            <SecondCardRow>
                <DetailsLink onClick={() => {goToPokemonDetails(navigate, pokemon.name)}}>Detalhes</DetailsLink>
                {renderButton()}
            </SecondCardRow>
            <PokemonSprite src={pokemon.sprites?.other["official-artwork"]["front_default"]} />
            <Pokeball src={pokeball} />
        </CardContainer>
    )
}

export default Card;
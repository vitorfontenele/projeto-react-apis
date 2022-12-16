import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import Card from "../../components/Card/Card";
import { useContext } from "react";
import {
    PokedexPageContainer,
    PokedexSection,
    PokedexTitle
} from "./styled";
import { BASE_URL } from "../../constants/url";

const PokedexPage = () => {
    const context = useContext(GlobalContext);
    const {pokedex, removeFromPokedex} = context;

    return (
        <PokedexPageContainer>
            <Header />
            <PokedexSection>
                <PokedexTitle>Meus Pokemóns</PokedexTitle>
                {pokedex.map((pokemon) => {
                    return (
                        <Card 
                            key={pokemon.name}
                            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
                            removeFromPokedex={removeFromPokedex}
                        />
                    )
                })}
            </PokedexSection>
        </PokedexPageContainer>
    )
}

export default PokedexPage;
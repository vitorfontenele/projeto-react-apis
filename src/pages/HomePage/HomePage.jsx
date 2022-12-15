import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
import {
    HomePageContainer, 
    PokelistSection,
    HomeTitle
} from "./styled";

const HomePage = () => {
    const context = useContext(GlobalContext);
    const {pokelist, pokedex, addToPokedex} = context;

    // mostrar apenas pokemons que nao estao na pokedex
    const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

    return (
        <HomePageContainer>
            <Header />
            <PokelistSection>
                <HomeTitle>Todos Pokémons</HomeTitle>
                {filteredPokelist().map((pokemon, index) => {
                    return (
                        <Card 
                            key={pokemon.name}
                            pokemonIndex={index + 1}
                            pokemonUrl={pokemon.url}
                            addToPokedex={addToPokedex}
                        />
                    )
                })}
            </PokelistSection>
        </HomePageContainer>
    )
}

export default HomePage;
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
import {
    HomePageContainer, 
    PokelistSection,
    HomeTitle
} from "./styled";
import Modal from "../../components/Modal/Modal";

const HomePage = () => {
    const context = useContext(GlobalContext);
    const {pokelist, pokedex, addToPokedex, showModal} = context;

    return (
        <HomePageContainer>
            <Header />
            <PokelistSection>
                <HomeTitle>Todos Pokémons</HomeTitle>
                {pokelist.map((pokemon) => {
                    return (
                        <Card 
                            key={pokemon.name}
                            pokemonUrl={pokemon.url}
                            addToPokedex={addToPokedex}
                        />
                    )
                })}
            </PokelistSection>
            {showModal && <Modal />}
        </HomePageContainer>
    )
}

export default HomePage;
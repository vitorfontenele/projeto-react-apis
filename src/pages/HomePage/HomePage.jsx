import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";

const HomePage = () => {
    const context = useContext(GlobalContext);
    const {pokelist, pokedex, addToPokedex} = context;

    const firstLetterUpper = (str) => {       
        return str ? str[0].toUpperCase() + str.slice(1) : "";
    }

    return (
        <>
            <Header />
            <section>
                {pokelist.map((pokemon, index) => {
                    return (
                        <Card 
                            key={pokemon.name}
                            pokemonIndex={index + 1}
                            pokemonUrl={pokemon.url}
                            addToPokedex={addToPokedex}
                        />
                    )
                })}
            </section>
        </>
    )
}

export default HomePage;
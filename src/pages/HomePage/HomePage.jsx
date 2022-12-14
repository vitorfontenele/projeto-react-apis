import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";

const HomePage = () => {
    const context = useContext(GlobalContext);
    const {pokelist, pokedex, addToPokedex} = context;

    return (
        <>
            <Header />
            <section>
                {pokelist.map(pokemon => {
                    return (
                        <Card 
                            key={pokemon.name}
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
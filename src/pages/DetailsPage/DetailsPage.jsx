import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useEffect , useState } from "react";
import {
    DetailsPageContainer,
    DetailsSection,
    DetailsTitle,
    SpriteBox,
    SpriteImgDefault
} from "./styled";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
    const { name } = useParams();
    const context = useContext(GlobalContext);
    const { pokelist } = context;
    const [detailedPokemon, setDetailedPokemon] = useState({});

    const pokemonToBeDetailed = pokelist.find(pokemon => pokemon["name"] === name);

    useEffect(() => {
        fetchDetailedPokemon();
    }, [pokelist]);

    const fetchDetailedPokemon = async () => {
        try {
            const response = pokemonToBeDetailed ? await axios.get(pokemonToBeDetailed.url) : {};
            setDetailedPokemon(response.data);
        } catch(error) {
            console.log("Erro ao pegar dados do Pokemon");
            console.log(error);
        }
    }
    const { sprites } = detailedPokemon ? detailedPokemon : {};
    const stats = detailedPokemon?.stats ? detailedPokemon.stats : [];

    return (
        <DetailsPageContainer>
            <Header />
            <DetailsSection>
                <DetailsTitle>Detalhes</DetailsTitle>
                <SpriteBox>
                    <SpriteImgDefault src={sprites?.back_default} />
                </SpriteBox>
                <SpriteBox>
                    <SpriteImgDefault src={sprites?.front_default} />
                </SpriteBox>
                <img src={sprites?.other["official-artwork"]["front_default"]} />
                {stats.map((stat, index) => {
                    return (
                        <p key={index}>Texto</p>
                    )
                })}
            </DetailsSection>
        </DetailsPageContainer>
    )
}

export default DetailsPage;
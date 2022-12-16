import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useEffect , useState } from "react";
import {
    DetailsPageContainer,
    DetailsSection,
    DetailsTitle,
    SpriteBox,
    SpriteImgDefault,
    TestBox,
    StatsTitle,
    StatsRow,
    StatsData,
    StatName,
    StatStat,
    StatBarContainer,
    StatBar,
    DetailsBox,
    SpriteBoxesContainer
} from "./styled";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getStatName } from "../../utils/ReturnStatName";
import { getStatColor } from "../../utils/ReturnStatColor";
import { getColors } from "../../utils/ReturnCardColor";

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

    const firstLetterUpper = (str) => {       
        return str ? str[0].toUpperCase() + str.slice(1) : "";
    }

    const bgColor = () => {
        const pokemonTypes = detailedPokemon?.types;
        const firstPokemonType = pokemonTypes ? pokemonTypes[0] : {};
        const firstPokemonTypeName = firstLetterUpper(firstPokemonType.type?.name);
        return getColors(firstPokemonTypeName);
    }

    const { sprites } = detailedPokemon ? detailedPokemon : {};
    const stats = detailedPokemon?.stats ? detailedPokemon.stats : [];

    let maxStat = 0;
    for (let i = 0; i < stats.length; i++){
        if (stats[i].base_stat > maxStat){
            maxStat = stats[i].base_stat;
        }
    }
    //console.log(maxStat);

    return (
        <DetailsPageContainer>
            <Header />
            <DetailsSection>
                <DetailsTitle>Detalhes</DetailsTitle>
                <DetailsBox bgColor={bgColor()}>
                    <SpriteBoxesContainer>
                        <SpriteBox>
                            <SpriteImgDefault src={sprites?.back_default} />
                        </SpriteBox>
                        <SpriteBox>
                            <SpriteImgDefault src={sprites?.front_default} />
                        </SpriteBox>
                    </SpriteBoxesContainer>
                    <TestBox>
                        <StatsTitle>Base stats</StatsTitle>
                        {stats.map((stat, index) => {
                            return (
                                <StatsData>
                                    <StatName>{getStatName(stat.stat.name)}</StatName>
                                    <StatStat>{stat.base_stat}</StatStat>
                                    <StatBar color={getStatColor(stat.base_stat)} width={0.75*100*stat.base_stat/maxStat}></StatBar>
                                </StatsData>
                            )   
                        })}
                        <StatsData bottom={true}>
                            <StatName>Total</StatName>
                            <StatStat weight={700}>{stats.reduce((previous, current) => previous + current.base_stat, 0)}</StatStat>
                        </StatsData>
                    </TestBox>
                </DetailsBox>
                
                
                <img src={sprites?.other["official-artwork"]["front_default"]} />
                
            </DetailsSection>
        </DetailsPageContainer>
    )
}

export default DetailsPage;
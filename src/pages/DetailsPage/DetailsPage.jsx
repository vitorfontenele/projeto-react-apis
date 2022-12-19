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
    SpriteBoxesContainer,
    InformationContainer,
    BasicInfo,
    PokemonIndex,
    PokemonName,
    TypesContainer,
    PokemonType,
    MovesContainer,
    MovesTitle,
    MovesBox,
    Move,
    ArtworkImage,
    Pokeball,
    BigPokeball
} from "./styled";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getStatName } from "../../utils/ReturnStatName";
import { getStatColor } from "../../utils/ReturnStatColor";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnCardColor";
import pokeball from "/pngwing 3.png";
import bigPokeball from "/pngwing 1.png";
import Modal from "../../components/Modal/Modal";

const DetailsPage = () => {
    const { name } = useParams();
    const context = useContext(GlobalContext);
    const { pokelist , detailedPokemon, setDetailedPokemon, showModal } = context;

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

    const adjustMoveName = (move) => {
        const moveArr = move.split("-");
        const newMoveArr = moveArr.map(item => firstLetterUpper(item));
        const newMoveName = newMoveArr.join(" ");
        return newMoveName;
    }

    const bgColor = () => {
        const pokemonTypes = detailedPokemon?.types;
        const firstPokemonType = pokemonTypes ? pokemonTypes[0] : {};
        const firstPokemonTypeName = firstLetterUpper(firstPokemonType.type?.name);
        return getColors(firstPokemonTypeName);
    }

    const { sprites } = detailedPokemon ? detailedPokemon : {};
    const stats = detailedPokemon?.stats ? detailedPokemon.stats : [];
    const moves = detailedPokemon?.moves ? detailedPokemon.moves : [];

    let maxStat = 0;
    for (let i = 0; i < stats.length; i++){
        if (stats[i].base_stat > maxStat){
            maxStat = stats[i].base_stat;
        }
    }
    //console.log(detailedPokemon?.moves);
    const configNumber = (index) => {
        return index < 10 ? `0${index}` : `${index}`;
    }

    return (
        <DetailsPageContainer>
            <Header />
            <DetailsSection>
                <DetailsTitle>Detalhes</DetailsTitle>
                <DetailsBox bgColor={bgColor()}>
                    <SpriteBoxesContainer>
                        <SpriteBox>
                            <SpriteImgDefault src={sprites?.front_default} />
                        </SpriteBox>
                        <SpriteBox>
                            <SpriteImgDefault src={sprites?.back_default} />
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
                    <InformationContainer>
                        <BasicInfo>
                            <PokemonIndex>{`#${configNumber(detailedPokemon?.id)}`}</PokemonIndex>
                            <PokemonName>{firstLetterUpper(detailedPokemon?.name)}</PokemonName>
                            <TypesContainer>
                                {detailedPokemon?.types?.map((pokemonType, index) => {
                                    const imageTypeLink = getTypes(firstLetterUpper(pokemonType.type.name));
                                    return <PokemonType key={index} src={imageTypeLink} alt="" />
                                })}
                            </TypesContainer>
                        </BasicInfo>
                        <MovesContainer>
                            <MovesTitle>Moves</MovesTitle>
                            <MovesBox>
                                {moves.map(moveObj => {
                                    const { name } = moveObj.move;
                                    return (<Move>{adjustMoveName(name)}</Move>)
                                })}
                            </MovesBox>
                        </MovesContainer>
                    </InformationContainer>
                    <ArtworkImage src={sprites?.other["official-artwork"]["front_default"]} alt=""/>
                    <Pokeball src={pokeball} alt="Pokeball"/>
                </DetailsBox>
                <BigPokeball src={bigPokeball} alt="Big Pokeball" />
            </DetailsSection>
            {showModal && <Modal />}
        </DetailsPageContainer>
    )
}

export default DetailsPage;
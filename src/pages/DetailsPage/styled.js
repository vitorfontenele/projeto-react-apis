import styled from "styled-components"

export const DetailsPageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1440px 1fr; 
`

export const DetailsSection = styled.section`
    grid-column: 2 / 3;
    padding: 0 40px;
    min-height: 100vh;
`

export const DetailsBox = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 100%;
    height: 663px;
    border-radius: 50px;
    display: grid;
    grid-template-columns: auto auto 1fr;
    grid-column-gap: 32px;
    padding: 35px 42px;
    position: relative;
`

export const DetailsTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    margin-top: 60px;
    margin-bottom: 16px;
    color: white;
    grid-column: 1 / 4;
`

export const SpriteBoxesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const SpriteBox = styled.div`
    background-color: white;
    width: 282px;
    height: 282px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SpriteImgDefault = styled.img`
    height: 300px;
    width: 300px;
`

export const TestBox = styled.div`
    width: 343px;
    background-color: white;
    padding: 24px 12px 24px 28px;
    border-radius: 12px;
    position: relative;
    z-index: 1;
`

export const StatsTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 12px;
`

export const StatsData = styled.div`
    font-size: 10px;
    display: grid;
    grid-template-columns: 50px 30px 1fr;
    grid-column-gap: 5px;
    height: 27px;
    border-top: 1px solid #ccc;
    align-items: center;
    border-bottom: ${(props) => props.bottom ? "1px solid #ccc" : ""};
`

export const StatsRow = styled.tr`
    border-bottom: 2px solid #ccc;
`

export const StatName= styled.div`
    text-align: right;
    color: #737273;
    font-weight: 500;
`

export const StatStat= styled.div`
    text-align: right;
    font-weight: ${(props) => props.weight};
`

export const StatBarContainer = styled.div`
    /* display: flex;
    align-items: center; */
`

export const StatBar = styled.div`
    background-color: red;
    height: 10px;
    width: ${(props) => `${(props.width)}%`};
    background-color: ${(props) => props.color};
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    margin-left: 10px;
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 32px;
    position: relative;
    z-index: 1;
`

export const BasicInfo = styled.div`
    color: white;
`

export const PokemonIndex = styled.p`
    line-height: 19.36px;
    font-family: 'Inter', sans-serif; 
    font-size: 16;
    font-weight: bold;
    margin-bottom: -4px;
`

export const PokemonName = styled.h1`
    font-size: 32px;
    font-weight: bold;
    font-family: 'Inter', sans-serif; 
    margin-bottom: 10px;
`

export const TypesContainer = styled.div`

`

export const PokemonType = styled.img`
    max-width: 100px;
    height: 32px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px dashed #ffffff;
    margin-right: 16px;
`;

export const MovesContainer = styled.div`
    width: 292px;
    border-radius: 8px;
    background-color: white;
    padding: 18px;
    height: 453px;
`

export const MovesTitle = styled.h1`
    font-family: 'Inter', sans-serif;
    font-family: 24px;  
    color: black;  
    font-weight: 800;
    margin-bottom: 24px;
`

export const MovesBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    overflow: auto;
    height: 80%;
`

export const Move = styled.div`
    background-color: #ececec;
    display: flex;
    align-items: center;
    padding: 14px;
    font-size: 14px;
    color: black;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
    width: fit-content;
`

export const ArtworkImage = styled.img`
    height: 270px;
    width: 270px;
    position: absolute;
    right: 0;
    top: -90px;
    right: 40px;
    z-index: 1;
`

export const Pokeball = styled.img`
    position: absolute;
    right: 0;
    z-index: 0;
`

export const BigPokeball = styled.img`
    position: absolute;
    top: 155px;
    z-index: -1;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`

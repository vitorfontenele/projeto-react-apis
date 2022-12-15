import styled from "styled-components";

export const PokemonSprite = styled.img`
    width: 193px;
    height: 193px;
    position: absolute;
    top: -60px;
    right: 0;
    z-index: 2;
`

export const CardContainer = styled.article`
    padding: 25px 23px 13px 23px;
    width: 440px;
    min-height: 210px;
    border-radius: 12px;
    background-color: ${(props) => props.color};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    color: white;
`

export const FirstCardRow = styled.div`
`;

export const SecondCardRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PokemonName = styled.h1`
    font-size: 32px;
    font-weight: bold;
`

export const PokemonNumber = styled.p`
    font-family: 'Inter', sans-serif; 
    font-size: 16;
    font-weight: bold;
`

export const PokemonType = styled.img`
    max-width: 100px;
    height: 32px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px dashed #ffffff;
    margin-right: 8px;
`;

export const TypesContainer = styled.div`
`;

export const Pokeball = styled.img`
    position: absolute;
    top: 0;
    right: 0;
`;

export const DetailsLink = styled.a`
    font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
`

export const ActionButton = styled.button`
    width: 146px;
    height: 38px;
    font-weight: 400;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    z-index: 3;
`
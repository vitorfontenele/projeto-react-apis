import styled from "styled-components";

export const HeaderContainer = styled.header`
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: 1fr 1440px 1fr;
    background-color: white;
`

export const HeaderContent = styled.div`
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 160px;
    align-items: center;
    padding: 0 40px;
`;

export const PokedexButton = styled.button`
    background-color: #33A4F5;
    color: white;
    font-size: 24px;
    width: 287px;
    height: 74px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    grid-column: 3 / 4;
    justify-self: end;
    cursor: pointer;
`;

export const Logo = styled.img`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: center;
    max-width: 100%;
    height: auto;
`

export const Link = styled.a`
    color: black;
    text-decoration: underline;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
`

export const LinkContainer = styled.div`
    grid-column: 1 / 2;
`

export const DeleteButton = styled.button`
    font-size: 16px;
    color: white;
    width: 226px;
    height: 57px;
    border: none;
    border-radius: 8px;
    font-weight: 400;
    background-color: #FF6262;
    grid-column: 3 / 4;
    justify-self: end;
    cursor: pointer;
`
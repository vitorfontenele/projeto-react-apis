import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: white;
    height: 160px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    padding: 0 calc((100vw - 1440px)/2);
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
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
`;

export const Logo = styled.img`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: center;
    max-width: 100%;
    height: auto;
`
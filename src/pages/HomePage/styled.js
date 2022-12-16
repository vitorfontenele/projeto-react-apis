import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1440px 1fr;
`

export const PokelistSection = styled.section`
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 50px;
    grid-column-gap: 20px;
    padding: 0px 40px;
    
`

export const HomeTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    margin-top: 60px;
    color: white;
    /* grid-row: 1 / 2; */
    grid-column: 1 / 4;
`
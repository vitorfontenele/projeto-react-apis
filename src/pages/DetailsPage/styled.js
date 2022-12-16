import styled from "styled-components"

export const DetailsPageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1440px 1fr; 
`

export const DetailsSection = styled.section`
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 50px;
    padding: 0px 40px;
`

export const DetailsTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    margin-top: 60px;
    color: white;
    grid-column: 1 / 4;
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

`



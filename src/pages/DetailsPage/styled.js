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
    padding: 0 40px;
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

export const TestBox = styled.div`
    grid-column: 1 / 4;
    width: 343px;
    background-color: white;
    padding: 24px 12px 24px 28px;
    border-radius: 12px;
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


import styled from "styled-components";

export const LoadingCardContainer = styled.div`
    width: 440px;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Loader = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`
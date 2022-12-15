import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useEffect } from "react";
import {
    DetailsPageContainer,
    DetailsSection,
    DetailsTitle
} from "./styled";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
    const { name } = useParams();
    // console.log(name);

    return (
        <DetailsPageContainer>
            <Header />
            <DetailsSection>
                <DetailsTitle>Detalhes</DetailsTitle>
            </DetailsSection>
        </DetailsPageContainer>
    )
}

export default DetailsPage;
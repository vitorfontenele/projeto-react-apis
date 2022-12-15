import {HeaderContainer, Button, Logo, Link} from  "./styled";
import { useLocation , useNavigate } from "react-router-dom";
import { goToPokedexPage , goToHomePage } from "../../routes/coordinator";
// import {PadContainer} from "../PadContainer/styled";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const renderHeader = () => {
        switch(location.pathname){
            case "/":
                return (
                    <HeaderContainer>
                        <Logo src={"pokemon-logo.png"} alt="Pokemón Logo"/>
                        <Button onClick={() => goToPokedexPage(navigate)}>Pokedéx</Button>
                    </HeaderContainer>
                );
            case "/pokedex":
                return (
                    <HeaderContainer>
                        <Link onClick={() => goToHomePage(navigate)}>Todos os Pokémons</Link>
                        <Logo src={"pokemon-logo.png"} alt="Pokemón Logo"/>
                    </HeaderContainer>
                )
        }
    }

    return (
        <>{renderHeader()}</>
        // <HeaderContainer>
        //     <Logo src={"pokemon-logo.png"} alt="Pokemón Logo"/>
        //     <Button>Pokedéx</Button>
        // </HeaderContainer>
    )
}

export default Header;
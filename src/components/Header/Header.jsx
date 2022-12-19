import {
    HeaderContainer,
    HeaderContent,
    PokedexButton, 
    Logo, 
    Link, 
    LinkContainer,
    DeleteButton
} from  "./styled";
import { useLocation , useNavigate , useParams  } from "react-router-dom";
import { goToPokedexPage , goToHomePage} from "../../routes/coordinator";
import { Icon } from '@iconify/react';
import pokemonLogo from "/pokemon-logo.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
// import {PadContainer} from "../PadContainer/styled";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name } = useParams();
    const context = useContext(GlobalContext);
    const { removeFromPokedex , detailedPokemon } = context;

    const renderHeader = () => {
        switch(location.pathname){
            case "/":
                return (
                    <HeaderContainer>
                        <HeaderContent>
                            <Logo src={pokemonLogo} alt="Pokemón Logo"/>
                            <PokedexButton onClick={() => goToPokedexPage(navigate)}>Pokedéx</PokedexButton>
                        </HeaderContent>
                    </HeaderContainer>
                );
            case "/pokedex":
                return (
                    <HeaderContainer>
                        <HeaderContent>
                            <LinkContainer>
                                <Icon icon="eva:arrow-ios-back-outline" />
                                <Link onClick={() => goToHomePage(navigate)}>Todos os Pokémons</Link>
                            </LinkContainer>
                            <Logo src={pokemonLogo} alt="Pokemón Logo"/>
                            <PokedexButton onClick={() => goToPokedexPage(navigate)}>Pokedéx</PokedexButton>
                        </HeaderContent>
                    </HeaderContainer>
                )
            case `/details/${name}`:
                return (
                    <HeaderContainer>
                        <HeaderContent>
                            <LinkContainer>
                                <Icon icon="eva:arrow-ios-back-outline" />
                                <Link onClick={() => goToHomePage(navigate)}>Todos os Pokémons</Link>
                            </LinkContainer>
                            <Logo src={pokemonLogo} alt="Pokemón Logo"/>
                            <DeleteButton onClick={() => {removeFromPokedex(detailedPokemon)}}>Excluir da Pokédex</DeleteButton>
                        </HeaderContent>
                    </HeaderContainer>
                )
        }
    }

    return (
        <>{renderHeader()}</>
    )
}

export default Header;
import {HeaderContainer, Button, Logo} from  "./styled";
// import {PadContainer} from "../PadContainer/styled";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src={"pokemon-logo.png"}/>
            <Button>Pokedéx</Button>
        </HeaderContainer>
    )
}

export default Header;
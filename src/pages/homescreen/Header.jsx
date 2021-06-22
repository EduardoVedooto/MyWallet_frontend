import { RiLogoutBoxRLine } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Olá, Fulano</h1>
      <IconContext.Provider value={{ size: "2.3em", color: "#fff", title: "Sair da conta" }}>
        <RiLogoutBoxRLine />
      </IconContext.Provider>
    </HeaderContainer>
  );
}

export default Header;
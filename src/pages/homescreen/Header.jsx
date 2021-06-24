import { RiLogoutBoxRLine } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { HeaderContainer } from "./style";


const Header = ({ name }) => {
  return (
    <HeaderContainer>
      <h1>Olá, {name.split(" ")[0]}</h1>
      <IconContext.Provider value={{ size: "2.3em", color: "#fff", title: "Sair da conta" }}>
        <RiLogoutBoxRLine />
      </IconContext.Provider>
    </HeaderContainer>
  );
}

export default Header;
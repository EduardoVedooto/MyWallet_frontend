import { ButtonContainer } from "./style";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

const Button = ({ type }) => {
  return (
    <ButtonContainer>
      <IconContext.Provider value={{ size: "1.8em" }}>
        {type === "income" ? <BiPlusCircle /> : <BiMinusCircle />}
      </IconContext.Provider>
      <span>Nova<br />{type === "income" ? "entrada" : "saída"}</span>
    </ButtonContainer>
  );
}

export default Button;
import { ButtonContainer } from "./style";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { useHistory } from "react-router";

const Button = ({ type, id }) => {
  const history = useHistory();
  return (
    <ButtonContainer onClick={() => history.push("/newentry", { type, id })}>
      <IconContext.Provider value={{ size: "1.8em" }}>
        {type === "income" ? <BiPlusCircle /> : <BiMinusCircle />}
      </IconContext.Provider>
      <span>Nova<br />{type === "income" ? "entrada" : "saída"}</span>
    </ButtonContainer>
  );
}

export default Button;
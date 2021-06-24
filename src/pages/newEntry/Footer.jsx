import { useHistory } from "react-router-dom";
import { Footer as FooterLayout } from "./style";
import { Button } from "./style";
import { BiChevronLeftCircle } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

const Footer = () => {
  const history = useHistory();
  return (
    <FooterLayout>
      <Button onClick={() => history.goBack()} >
        <IconContext.Provider value={{ size: "1.8em" }}>
          <BiChevronLeftCircle />
        </IconContext.Provider>
        <span>Voltar</span>
      </Button>
      <Button type="invisible" />
    </FooterLayout>
  );
}

export default Footer;
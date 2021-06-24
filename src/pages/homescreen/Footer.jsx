import Button from "./Button";
import { FooterContainer } from "./style";

const Footer = ({ id }) => {
  return (
    <FooterContainer>
      <Button type="income" id={id} />
      <Button type="outgo" id={id} />
    </FooterContainer>
  );
}

export default Footer;
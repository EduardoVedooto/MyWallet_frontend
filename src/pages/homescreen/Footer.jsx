import Button from "./Button";
import { FooterContainer } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <Button type="income" />
      <Button type="outgo" />
    </FooterContainer>
  );
}

export default Footer;
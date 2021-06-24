import Button from "./Button";
import { Footer as FooterLayout } from "../../styles/Footer";

const Footer = ({ id }) => {
  return (
    <FooterLayout>
      <Button type="income" id={id} />
      <Button type="outgo" id={id} />
    </FooterLayout>
  );
}

export default Footer;
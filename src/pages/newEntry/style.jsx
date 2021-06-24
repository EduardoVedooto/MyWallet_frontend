import styled from "styled-components";
import { Button as ButtonLayout } from "../../styles/Button";
import { Footer as FooterLayout } from "../../styles/Footer";

const NewEntryContainer = styled.main`
  min-height: 100vh;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  
  padding: 2.5rem 2.4rem;
`;

const HeaderContainer = styled.header`
  color: #fff;
  width: 100%;
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3.6rem;
  user-select: none;
`;

const Button = styled(ButtonLayout)`
  height: 12.86rem;
  gap: 0;
  margin-top: auto;
  justify-content: space-between;
  background: ${props => props.type ? "0" : ""};
  cursor: ${props => props.type ? "default" : "pointer"};
`;

const Footer = styled(FooterLayout)`
  margin-top: auto;

`;

export { NewEntryContainer, HeaderContainer, Button, Footer };
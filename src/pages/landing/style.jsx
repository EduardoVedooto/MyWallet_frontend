import styled from "styled-components";
import { Footer as FooterLayout } from "../../styles/Footer";
import { Button as ButtonLayout } from "../../styles/Button";
import Title from "../../styles/Title";

const LandingComponent = styled.main`
  background-color: var(--color-primary);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const TitleModified = styled(Title)`
  font-size: 7rem;
  margin-top: auto;
`;

const SubTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  color: #fff;
  font-weight: 700;
`;

const Footer = styled(FooterLayout)`
  margin-top: auto;
  flex-direction: column;
`;

const Button = styled(ButtonLayout)`
  height: 10rem;
  justify-content: center;
  align-items: center;
  font-size: 2.6rem;
`;

export { LandingComponent, Footer, Button, TitleModified, SubTitle };
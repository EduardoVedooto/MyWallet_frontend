import styled from "styled-components";

const HomeScreenContainer = styled.main`
  min-height: 100vh;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 2.4rem;
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  
  h1{
    color: #fff;
    font-size: 2.6rem;
    font-weight: 700;
    user-select: none;
  }

  svg {
    cursor: pointer;
  }

`;

const DashboardContainer = styled.section`
  width: 100%;
  background-color: #fff;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  &>p {
    color: #868686;
    font-size: 2rem;
    text-align: center;
  }
`;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
`;

const ButtonContainer = styled.button`
  background-color: var(--color-secondary);
  width: 100%;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: 700;
  gap: 3rem;

  span {
    text-align: left;
  }
`;

export {
  HomeScreenContainer,
  HeaderContainer,
  DashboardContainer,
  FooterContainer,
  ButtonContainer
};
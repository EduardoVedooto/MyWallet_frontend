import styled from "styled-components";

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

const Button = styled.button`
  background-color: var(--color-secondary);
  width: 48%;
  min-width: 7.2rem;
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
  gap: 5.3rem;
  margin-top: auto;
  margin-right: auto

  span {
    text-align: left;
  }
`;

export { NewEntryContainer, HeaderContainer, Button };
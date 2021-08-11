import styled from 'styled-components';

const SignupContainer = styled.main`
  min-height: 100vh;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;

  &>a{
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin-top: 2.45em;
  }
`;

export { SignupContainer };

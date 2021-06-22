import styled from "styled-components";

const SigninContainer = styled.main`
  min-height: 100vh;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &>a{
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin-top: 2.45em;
  }
`;

const Title = styled.h1`
  font-family: 'Saira Stencil One', cursive;
  font-size: 3.2rem;
  color: #fff;
  user-select: none;
  margin-bottom: .8em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 90%;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  border-radius: .5rem;
  padding: .7em 0 .7em .7em;
  &::placeholder{
    color: #000;
  }
`;

const Button = styled.button`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  padding: .7em 0 .7em .7em;
  border: none;
  outline: none;
  background-color: var(--color-secondary);
  border-radius: .5rem;
  color: #fff;
  cursor: pointer;
`;

export { SigninContainer, Title, Form, Input, Button };
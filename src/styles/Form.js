import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 100%;

  &>input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 20px;
    border-radius: .5rem;
    padding: .7em 0 .7em .7em;
    ::placeholder{
      color: #000;
    }
  }

  &>button {
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
  }
`;

export default Form;

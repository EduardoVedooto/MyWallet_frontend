import styled from "styled-components";

const Button = styled.button`
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
    user-select: none;
  }
`;

export { Button };
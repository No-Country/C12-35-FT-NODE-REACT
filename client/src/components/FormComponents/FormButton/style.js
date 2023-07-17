import styled from "styled-components"

export const Button = styled.button`
  border-radius: var(--radius-button);
  color: var(--text-tertiary);
  font-weight: 600;
  background-color: #4bffb3;
  height: 50px;
  width: 100%;
  font-size: 15px;
  margin: 50px 0px 10px 0px;

  &:disabled {
    background-color: var(--background-disabled);
    cursor: not-allowed;
  }
`

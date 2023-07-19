import styled from "styled-components"

export const ButtonWrapper = styled.button`
  padding: 12px 50px;
  border-radius: var(--radius-light);
  background-color: ${(props) =>
    props.$secondary ? "var(--background-card)" : "var(--primary-opacity)"};
  font-size: 14px;
  font-weight: 400;
  color: var(--primary);
`

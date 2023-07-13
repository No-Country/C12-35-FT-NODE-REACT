import styled from "styled-components"

export const ButtonWrapper = styled.button`
  padding: 15px 40px;
  border-radius: var(--radius-light);
  background-color: ${(props) =>
    props.$secondary ? "#747474" : "var(--background-button)"};
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => (props.$secondary ? "var(--text-primary)" : "#000")};
  border: ${(props) =>
    props.$secondary ? "var(--border-white)" : "var(--border-transparent)"};
`

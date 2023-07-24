import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.$width ? props.$width : "")};
  border-radius: var(--radius-light);
  padding: 0.7rem;
  color: ${(props) =>
    props.$isActive ? "var(--primary)" : "var(--primary-opacity)"};
  background-color: ${(props) =>
    props.$isActive ? "var(--primary-opacity)" : "var(--background-light)"};
`;

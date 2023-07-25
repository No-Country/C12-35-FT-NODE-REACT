import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items:center;
  gap:.8rem;
  width: ${(props) => (props.$width ? props.$width : "")};
  border-radius: var(--radius-light);
  padding: 0.7rem;
  color: ${(props) => (props.$color ? props.$color : "")};
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : ""};
`;

import { Link } from "react-router-dom"
import styled from "styled-components"

export const ShortCut = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  opacity: ${(props) => (props.$light ? "0.7" : "0.9")};
`

export const Title = styled.h3`
  font-size: ${(props) => (props.$little ? "0.9rem" : "1rem")};
  font-weight: 400;
`

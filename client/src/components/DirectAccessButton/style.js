import { Link } from "react-router-dom"
import styled from "styled-components"

export const Button = styled(Link)`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: white;
  box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.15);
  font-size: 1.8rem;
  color: #808080;
`

import { Link } from "react-router-dom"
import styled from "styled-components"

export const Button = styled(Link)`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-button);
  background-color: var(--background-card);
  box-shadow: var(--shadow-primary);
  font-size: 1.8rem;
  color: var(--text-primary);
`

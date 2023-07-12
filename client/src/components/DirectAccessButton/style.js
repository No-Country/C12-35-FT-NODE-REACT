import { Link } from "react-router-dom"
import styled from "styled-components"

export const CustomButton = styled(Link)`
  height: 80px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-button);
  background-color: var(--background-card);
  box-shadow: var(--shadow-primary);
  font-size: 2rem;
  color: var(--text-primary);
`

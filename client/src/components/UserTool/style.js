import { Link } from "react-router-dom"
import styled from "styled-components"

export const Tool = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  border-radius: var(--radius-cards);
  transition: all 0.3s ease-in-out;

  & > div {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  & h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  & div > span {
    width: 48px;
    aspect-ratio: 1 / 1;
    border-radius: var(--radius-full);
    background-color: var(--background-icon);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary);
  }

  :hover {
    background-color: var(--card-hover);
  }
`

export const Icon = styled.i`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: var(--text-primary-light);
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & h3 {
    font-weight: 500;
  }

  & h4 {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--text-secondary);
  }
`

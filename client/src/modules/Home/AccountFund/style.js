import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 170px;
  position: relative;
`

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-cards);
  box-shadow: var(--shadow-primary);
  background-color: var(--background-card);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-primary-light);
`

export const StyledLink = styled.span`
  position: absolute;
  margin: 15px;
  left: 0;
  top: 0;
  z-index: 1000;
  cursor: pointer;
`

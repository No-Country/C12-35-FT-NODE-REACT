import styled from "styled-components"

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  grid-column: 6 / 25;
  grid-row: 1 / 2;
`

export const HeaderWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const WelcomeMessage = styled.h2`
  font-weight: 400;
`

export const WelcomeUser = styled.span`
  font-weight: 600;
`
export const GroupDirectButton = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-start;
`
export const CustomButton = styled.button`
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

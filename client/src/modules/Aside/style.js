import styled from "styled-components"

export const AsideWrapper = styled.div`
  height: 100%;
  grid-column: 1 / 6;
  grid-row: 1 / 13;
  margin-right: 20px;
`

export const AsideWrap = styled.div`
  height: 100%;
`

export const AsideTitle = styled.h4`
  font-size: 32px;
  margin-bottom: 60px;
`

export const NavRoutes = styled.ul`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const NavShortcuts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Icon = styled.i`
  display: flex;
  align-items: center;
  font-size: 28px;
`

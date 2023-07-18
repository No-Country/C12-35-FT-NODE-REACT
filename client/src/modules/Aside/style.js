import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const AsideWrapper = styled.div`
  height: 100%;
  grid-column: 1 / 6;
  grid-row: 1 / 13;
  margin-right: 20px;
  color: var(--text-primary-light);
`

export const AsideWrap = styled.div`
  height: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const GoTo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease-in-out;

  &.active {
    color: var(--primary);
  }

  &:hover {
    color: var(--text-secondary);
  }

  &:hover.active {
    color: var(--primary);
  }
`

export const Logout = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  color: var(--text-primary-light);
  transition: all 0.3s ease-in-out;

  & ${Icon} {
    font-size: 36px;
  }

  &:hover {
    color: var(--text-secondary);
  }
`

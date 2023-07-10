import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
`

export const HeaderWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
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
`
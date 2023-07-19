import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  background-color: #2e2e2e;
  color: #fff;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100px;

  @media (max-width: 600px) {
    height: 80px;
  }
`

export const HeaderWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  font-family: "Poppins";
`

export const LogoWrapper = styled.img`
  height: 75%;
  grid-column: 2 / span 3;
  translate: -30px 0;
  align-self: center;
  cursor: pointer;

  @media (max-width: 600px) {
    translate: -30px -10px;
    height: 50%;
  }
`

export const NavWrapper = styled.h2`
  grid-column: 5 / span 4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`

export const NavItem = styled(Link)`
  color: #d9d9d9;
  font-size: .9rem;
  font-weight: 700;
`
export const GroupDirectButton = styled.div`
  grid-column: 9 / span 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`

export const IngresarButton = styled(Link)`
  font-size: .9rem;
  font-weight: 700;
  color: #4bffb3;
  border: 1px #4bffb3 solid;
  border-radius: 16px;
  padding: .5rem 2rem;
  display: flex;
  align-items: center;
`
export const CrearButton = styled(Link)`
  font-size: .9rem;
  font-weight: 700;
  color: #2e2e2e;
  background-color: #4bffb3;
  border: 1px #4bffb3 solid;
  border-radius: 16px;
  text-wrap: nowrap;
  padding: .5rem 2rem;
  display: flex;
  align-items: center;
`

export const BurgerMenu = styled.div`
  display: none;
  text-align: center;
  align-self: center;
  font-size: 2rem;
  margin: -30px;
  translate: 42px -15px;
  max-height: 40px;

  @media (max-width: 600px) {
    display: block;
    grid-column: 9 / span 3;
    overflow: hidden;
    width: 120%;

    &.open {
      max-height: 400px;
      padding-top: 20px;
      padding-bottom: 20px;
      translate: 42px 46px;
      background-color: rgba(0,0,0,.75);
    }
  }
`

export const DDItem = styled(Link)`
  display: block;
  font-size: .8rem;
  margin: 5px 0 0 10px;
  width: 80%;
`
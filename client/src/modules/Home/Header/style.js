import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  background-color: #2e2e2e;
  color: #fff;
  padding: 0 5%;
  width: 100%;
  height: 80px;
  grid-column: 3 / 13;
  grid-row: 1 / 2;
`

export const HeaderWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-family: "Poppins";
`

export const LogoWrapper = styled.img`
  height: 75%;
`

export const NavWrapper = styled.h2`
`

export const NavItem = styled.span`
  color: #d9d9d9;
  font-size: .9rem;
  font-weight: 700;
  margin: 0 2rem;
`
export const GroupDirectButton = styled.div`
  display: flex;
  gap: 10px;
`

export const IngresarButton = styled.div`
  font-size: .9rem;
  font-weight: 700;
  color: #4bffb3;
  border: 1px #4bffb3 solid;
  border-radius: 16px;
  padding: .5rem 2rem;
  display: flex;
  align-items: center;
`
export const CrearButton = styled.div`
  font-size: .9rem;
  font-weight: 700;
  color: #2e2e2e;
  background-color: #4bffb3;
  border-radius: 16px;
  padding: .5rem 2rem;
  display: flex;
  align-items: center;
`
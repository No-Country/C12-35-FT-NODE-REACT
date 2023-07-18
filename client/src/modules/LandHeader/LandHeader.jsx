import { DirectAccessButton } from "@/components";
import React from "react";
import {
  GroupDirectButton,
  HeaderWrap,
  HeaderWrapper,
  LogoWrapper,
  NavWrapper,
  NavItem,
  IngresarButton,
  CrearButton,
  BurgerMenu
} from "./style";
import imagotipo from '@/assets/images/logos/Imagotipo.svg';

export default function LandHeader() {
  const user = null; //placeholder para la llamada a la redux store y verificación del user

  const logButtons = [
    {
      id: 1,
      slug: "Ingresar"
    },
    {
      id: 2,
      slug: "Crear cuenta"
    }
  ]

  return (
    <HeaderWrapper>
      <HeaderWrap>
        <LogoWrapper src={imagotipo} />
        <NavWrapper>
          <NavItem>Beneficios</NavItem>
          <NavItem>Nosotros</NavItem>
          <NavItem>Ayuda</NavItem>
        </NavWrapper>
        <GroupDirectButton>
          {user ? directAccess.map(({ id, slug, icon }) => {
            return (
              <DirectAccessButton key={id} link={slug}>
                {icon}
              </DirectAccessButton>
            )
          })
          :
          <>
            <IngresarButton>Ingresar</IngresarButton>
            <CrearButton>Crear cuenta</CrearButton>
          </>
          }
        </GroupDirectButton>
        <BurgerMenu>&#x2630;</BurgerMenu>
      </HeaderWrap>
    </HeaderWrapper>
  )
}
import { DirectAccessButton } from "@/components"
import React from "react"
import {
  GroupDirectButton,
  HeaderWrap,
  HeaderWrapper,
  LogoWrapper,
  NavWrapper,
  NavItem,
  IngresarButton,
  CrearButton
} from "./style"
import { BiSolidBell } from "react-icons/bi"
import { IoPersonCircle } from "react-icons/io5"
import imagotipo from '@/assets/images/logos/Imagotipo.svg';

export default function Header() {
  const user = null; //placeholder para la llamada a la redux store y verificación del user

  //constants
  const directAccess = [
    {
      id: 1,
      slug: "notifications",
      icon: <BiSolidBell />
    },
    {
      id: 2,
      slug: "profile",
      icon: <IoPersonCircle />
    }
  ]

  //constants
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
      </HeaderWrap>
    </HeaderWrapper>
  )
}
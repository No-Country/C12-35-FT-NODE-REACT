import { DirectAccessButton } from "@/components"
import React from "react"
import {
  GroupDirectButton,
  HeaderWrap,
  HeaderWrapper,
<<<<<<< HEAD
  LogoWrapper,
  NavWrapper,
  NavItem,
  IngresarButton,
  CrearButton
} from "./style"
import { BiSolidBell } from "react-icons/bi"
import { IoPersonCircle } from "react-icons/io5"
import imagotipo from '@/assets/images/logos/Imagotipo.svg';
=======
  WelcomeMessage,
  WelcomeUser,
  CustomButton
} from "./style"
import { BiSolidBell } from "react-icons/bi"
import { IoPersonCircle } from "react-icons/io5"
import { BiSolidLogOut } from "react-icons/bi"

import Cookies from "js-cookie"
import { redirect } from "react-router-dom"
>>>>>>> 9e04aa40ac5787710f9d8c6378c3b888d100d3a5

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
    },{
      id:3,
      slug:"",
      icon: <BiSolidLogOut/>
    }
  ]
<<<<<<< HEAD

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

=======
  const logOutTest= ()=>{
    Cookies.remove('accessToken', { path: '/' })
    window.location.reload();
    return redirect('/srv/login')
  }
>>>>>>> 9e04aa40ac5787710f9d8c6378c3b888d100d3a5
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
<<<<<<< HEAD
          {user ? directAccess.map(({ id, slug, icon }) => {
            return (
=======
          {directAccess.map(({ id, slug, icon }) => {
            return id === 3 ? (<CustomButton key={id} onClick={logOutTest}>{icon}</CustomButton>) : (
>>>>>>> 9e04aa40ac5787710f9d8c6378c3b888d100d3a5
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
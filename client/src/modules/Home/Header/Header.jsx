import { DirectAccessButton } from "@/components"
import React from "react"
import {
  GroupDirectButton,
  HeaderWrap,
  HeaderWrapper,
  WelcomeMessage,
  WelcomeUser,
  CustomButton
} from "./style"
import { BiSolidBell } from "react-icons/bi"
import { IoPersonCircle } from "react-icons/io5"
import { BiSolidLogOut } from "react-icons/bi"

import Cookies from "js-cookie"
import { redirect } from "react-router-dom"

export default function Header() {
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
  const logOutTest= ()=>{
    Cookies.remove('accessToken', { path: '/' })
    window.location.reload();
    return redirect('/srv/login')
  }
  return (
    <HeaderWrapper>
      <HeaderWrap>
        <WelcomeMessage>
          Hola <WelcomeUser>Pepito</WelcomeUser>!
        </WelcomeMessage>
        <GroupDirectButton>
          {directAccess.map(({ id, slug, icon }) => {
            return id === 3 ? (<CustomButton key={id} onClick={logOutTest}>{icon}</CustomButton>) : (
              <DirectAccessButton key={id} link={slug}>
                {icon}
              </DirectAccessButton>
            )
          })}
        </GroupDirectButton>
        
      </HeaderWrap>
    </HeaderWrapper>
  )
}
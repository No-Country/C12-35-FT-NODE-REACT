import { DirectAccessButton } from "@/components"
import React from "react"
import { BiSolidBell } from "react-icons/bi"
import { IoPersonCircle } from "react-icons/io5"
import {
  GroupDirectButton,
  HeaderWrap,
  HeaderWrapper,
  WelcomeMessage,
  WelcomeUser
} from "./style"

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
    }
  ]

  return (
    <HeaderWrapper>
      <HeaderWrap>
        <WelcomeMessage>
          Hola <WelcomeUser>Pepito</WelcomeUser>!
        </WelcomeMessage>
        <GroupDirectButton>
          {directAccess.map(({ id, slug, icon }) => {
            return (
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

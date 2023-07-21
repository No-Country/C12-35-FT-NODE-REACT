import { CopyAccountInfo, UserTool } from "@/components"
import React from "react"
import { FaUser, FaUserCircle } from "react-icons/fa"
import { IoShieldCheckmark } from "react-icons/io5"
import {
  AccountInfo,
  ProfileHeader,
  ProfileWrap,
  ProfileWrapper,
  UserTools
} from "./style"
import { useSelector } from "react-redux"

export default function Profile() {
  //constants
  const toolData = [
    {
      id: 1,
      icon: <FaUser />,
      title: "Mis datos Personales",
      link: "/app/profile/personal-data"
    },
    {
      id: 2,
      icon: <IoShieldCheckmark />,
      title: "Privacidad",
      link: "/app/profile/privacy"
    }
  ]

  const userData = useSelector((state) => state.auth)
  const fakeUser = {
    account: {
      id: 1,
      cvu: "0000003100068949510855",
      alias: "asd.asdasd22.fw"
    }
  }

  return (
    <ProfileWrapper>
      <ProfileWrap>
        <ProfileHeader>
          <span>
            <FaUserCircle />
          </span>
          <h3>¡Hola {userData.user.first_name}!</h3>
        </ProfileHeader>
        <AccountInfo>
          <CopyAccountInfo title='CVU' value={fakeUser.account.cvu} />
          <CopyAccountInfo title='Alias' value={fakeUser.account.alias} />
        </AccountInfo>
        <UserTools>
          {toolData.map((tool) => {
            return <UserTool key={tool.id} data={tool} />
          })}
        </UserTools>
      </ProfileWrap>
    </ProfileWrapper>
  )
}

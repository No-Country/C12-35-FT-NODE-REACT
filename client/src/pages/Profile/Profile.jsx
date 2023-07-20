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

  const fakeUser = {
    email: "santiagovolentiera@gmail.com",
    address: "123 Main St",
    local_address: "Apt 4B",
    postal_code: "12345",
    phone_number: "555-1111",
    profile_picture: "user1.jpg",
    country: "USA",
    document_type: "Passport",
    document_number: "AB123456",
    birthdate: "1990-01-01T00:00:00.000Z",
    first_name: "John",
    last_name: "Doe",
    verified: false,
    verified_Phone: "",
    account: {
      id: 1,
      cvu: "0000003100068949510855",
      alias: "asd.asdasd22.fw",
      balance: 0
    }
  }

  return (
    <ProfileWrapper>
      <ProfileWrap>
        <ProfileHeader>
          <span>
            <FaUserCircle />
          </span>
          <h3>¡Hola {fakeUser.first_name}!</h3>
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

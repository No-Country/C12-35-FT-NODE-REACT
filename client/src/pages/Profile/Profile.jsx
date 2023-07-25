import { CopyAccountInfo, UserTool } from "@/components"
import { EstructureCards } from "@/modules"
import React from "react"
import { FaUser, FaUserCircle } from "react-icons/fa"
import { IoShieldCheckmark } from "react-icons/io5"
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

  const UserToolsItems = toolData.map((tool) => {
    return <UserTool key={tool.id} data={tool} />
  })

  return (
    <EstructureCards
      icon={<FaUserCircle />}
      firstName={userData.user?.first_name}
      additions={UserToolsItems}>
      <CopyAccountInfo title='CVU' value={fakeUser.account.cvu} />
      <CopyAccountInfo title='Alias' value={fakeUser.account.alias} />
    </EstructureCards>
  )
}

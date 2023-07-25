import React from "react"
import { EstructureCards } from "@/modules"
import { FaUserCircle } from "react-icons/fa"
import {
  MdOutlineAccountBalanceWallet,
  MdOutlinePermContactCalendar
} from "react-icons/md"
import { UserTool } from "@/components"

export default function TransferMoney() {
  //constants
  const toolData = [
    {
      id: 1,
      icon: <MdOutlineAccountBalanceWallet />,
      title: "Con CVU, CBU o Alias",
      subtitle: "A cuentas digitales o bancarias",
      link: "/app/profile/personal-data"
    },
    {
      id: 2,
      icon: <MdOutlinePermContactCalendar />,
      title: "Con CVU, CBU o Alias",
      subtitle: "A cuentas de FundWave",
      link: "/app/profile/privacy"
    }
  ]

  return (
    <EstructureCards
      icon={<FaUserCircle />}
      title='Seleccioná un método de transferencia'>
      {toolData.map((tool) => {
        return <UserTool key={tool.id} data={tool} />
      })}
    </EstructureCards>
  )
}

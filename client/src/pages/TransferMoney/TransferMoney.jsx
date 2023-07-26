import React from "react"
import { EstructureCards } from "@/modules"
import {
  MdOutlineAccountBalanceWallet,
  MdOutlinePermContactCalendar
} from "react-icons/md"
import { UserTool } from "@/components"
import { useIcons } from "@/services/global/customIcons"

export default function TransferMoney() {
  //hooks
  const { MoneyBillTransfer } = useIcons()

  //constants
  const toolData = [
    {
      id: 2,
      icon: <MdOutlinePermContactCalendar />,
      title: "Con CVU, CBU o Alias",
      subtitle: "A cuentas de FundWave",
      link: "/app/transf/int"
    }
  ]

  return (
    <EstructureCards
      returnRoute='/app'
      icon={<MoneyBillTransfer />}
      title='Seleccioná un método de transferencia'>
      {toolData.map((tool) => {
        return <UserTool key={tool.id} data={tool} />
      })}
    </EstructureCards>
  )
}

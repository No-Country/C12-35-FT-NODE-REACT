import { EstructureCards } from "@/modules"
import { UserTool } from "@/components"
import { useIcons } from "@@/global/customIcons"
import { BsCreditCard2Back } from "react-icons/bs"
import { PiCoinsLight } from "react-icons/pi"

export default function AddMoney() {
  //hooks
  const { MoneyBillTransfer } = useIcons()

  //constants
  const toolData = [
    {
      id: 2,
      icon: <BsCreditCard2Back />,
      title: "Débito/Crédito",
      subtitle: "Sin cargo",
      link: "/app/addfunds/method",
      resalt: true
    },
    {
      id: 3,
      icon: <PiCoinsLight />,
      title: "Efectivo",
      link: "/app/addfunds/cash"
    }
  ]

  return (
    <EstructureCards
      returnRoute='/app'
      icon={<MoneyBillTransfer />}
      title='Seleccioná un método de ingreso'>
      {toolData.map((tool) => {
        return <UserTool key={tool.id} data={tool} />
      })}
    </EstructureCards>
  )
}

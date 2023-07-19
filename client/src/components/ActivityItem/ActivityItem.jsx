import { useIcons } from "@@/global/customIcons"
import React from "react"
import { IoIosExit } from "react-icons/io"

import {
  ActivityDetail,
  ActivityItemWrap,
  Date,
  GroupDetail,
  IconActivity
} from "./style"

export default function ActivityItem({ type, time, id }) {
  //icons
  const { MoneyBillTransfer, MoneyBillAddsFund } = useIcons()
  //constants
  const messageTransfer = {
    transfer: "Recibiste una transferencia",
    payment: "Recibiste un pago",
    send: "Enviaste dinero a"
  }
  const iconTransfer = {
    transfer: MoneyBillTransfer(),
    payment: <IoIosExit />,
    send: MoneyBillAddsFund()
  }
  return (
    <ActivityItemWrap>
      <GroupDetail>
        <IconActivity type={type}>{iconTransfer[type]}</IconActivity>
        <ActivityDetail>{messageTransfer[type]}</ActivityDetail>
      </GroupDetail>
      <Date>{time}</Date>
    </ActivityItemWrap>
  )
}

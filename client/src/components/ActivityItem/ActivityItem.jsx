import React from "react"
import { IoIosExit } from "react-icons/io"
import { IoCashSharp, IoPaperPlaneSharp } from "react-icons/io5"
import {
  ActivityDetail,
  ActivityItemWrap,
  Date,
  GroupDetail,
  IconActivity
} from "./style"

export default function ActivityItem({ type, time, id }) {
  //constants
  const messageTransfer = {
    transfer: "Recibiste una transferencia",
    payment: "Recibiste un pago",
    send: "Enviaste dinero a"
  }
  const iconTransfer = {
    transfer: <IoCashSharp />,
    payment: <IoIosExit />,
    send: <IoPaperPlaneSharp />
  }
  return (
    <ActivityItemWrap>
      <GroupDetail>
        <IconActivity>{iconTransfer[type]}</IconActivity>
        <ActivityDetail>{messageTransfer[type]}</ActivityDetail>
      </GroupDetail>
      <Date>{time}</Date>
    </ActivityItemWrap>
  )
}

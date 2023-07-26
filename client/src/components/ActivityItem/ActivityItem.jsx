import { useIcons } from "@@/global/customIcons"
import React from "react"

import useFormatInfo from "./hooks"
import {
  ActivityDetail,
  ActivityItemWrap,
  Amount,
  Date,
  GroupDetail,
  IconActivity,
  RightData
} from "./style"

export default function ActivityItem({
  type,
  time,
  id,
  amount,
  userDestination
}) {
  //hooks
  const { MoneyBillTransfer, MoneyBillAddsFund } = useIcons()
  const { formatterSign, formatterDate } = useFormatInfo()
  //constants
  const messageTransfer = {
    transfer: "Recibiste una transferencia",
    send: "Enviaste dinero"
  }

  const pronounTransfer = {
    transfer: "de",
    send: "a"
  }

  const iconTransfer = {
    transfer: MoneyBillTransfer(),
    send: MoneyBillAddsFund()
  }

  return (
    <ActivityItemWrap>
      <GroupDetail>
        <IconActivity type={type}>{iconTransfer[type]}</IconActivity>
        <ActivityDetail>
          <span>{messageTransfer[type]}</span>
          {/* el nombre del usuario que envio o recibio la transferencia, después
          se va a cambiar por el nombre real de la api */}
          <span>
            {pronounTransfer[type]} {userDestination}
          </span>
        </ActivityDetail>
      </GroupDetail>
      <RightData>
        <Amount type={type}>{formatterSign(amount, type)}</Amount>
        <Date>{formatterDate(time)}</Date>
      </RightData>
    </ActivityItemWrap>
  )
}

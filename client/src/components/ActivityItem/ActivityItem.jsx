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

export default function ActivityItem({ type, time, id, amount }) {
  //hooks
  const { MoneyBillTransfer, MoneyBillAddsFund, MoneyBillTrendUp } = useIcons()
  const { formatterSign, formatterDate } = useFormatInfo()
  //constants
  const messageTransfer = {
    TRANSFER: "Recibiste una transferencia",
    SEND: "Realizaste una transferencia",
    ADD: "Agregaste dinero a tu cuenta"
  }

  const pronounTransfer = {
    TRANSFER: "de",
    SEND: "a"
  }

  const iconTransfer = {
    TRANSFER: MoneyBillAddsFund(),
    SEND: MoneyBillTransfer(),
    ADD: MoneyBillTrendUp()
  }

  return (
    <ActivityItemWrap>
      <GroupDetail>
        <IconActivity type={type}>{iconTransfer[type]}</IconActivity>
        <ActivityDetail>
          <span>{messageTransfer[type]}</span>
        </ActivityDetail>
      </GroupDetail>
      <RightData>
        <Amount type={type}>{formatterSign(amount, type)}</Amount>
        <Date>{formatterDate(time)}</Date>
      </RightData>
    </ActivityItemWrap>
  )
}

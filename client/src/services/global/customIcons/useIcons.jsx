import React from "react"
import {
  MoneyBillAddFundsIcon,
  MoneyBillTransferIcon,
  MoneyBillTrendUpIcon
} from "@/assets/icons"

const useIcons = () => {
  const MoneyBillTransfer = () => {
    return <MoneyBillTransferIcon />
  }

  const MoneyBillAddsFund = () => {
    return <MoneyBillAddFundsIcon />
  }

  const MoneyBillTrendUp = () => {
    return <MoneyBillTrendUpIcon />
  }

  return { MoneyBillTransfer, MoneyBillAddsFund, MoneyBillTrendUp }
}

export default useIcons

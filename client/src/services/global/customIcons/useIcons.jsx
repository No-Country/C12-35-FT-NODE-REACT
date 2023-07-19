import React from "react"
import { MoneyBillAddFundsIcon, MoneyBillTransferIcon } from "@/assets/icons"

const useIcons = () => {
  const MoneyBillTransfer = () => {
    return <MoneyBillTransferIcon />
  }

  const MoneyBillAddsFund = () => {
    return <MoneyBillAddFundsIcon />
  }

  return { MoneyBillTransfer, MoneyBillAddsFund }
}

export default useIcons

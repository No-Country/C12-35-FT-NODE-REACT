import React, { useEffect, useState } from "react"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
import { DetailFundWrapper, Fund, Icon } from "./style"
import useFormatFund from "./hooks"

export default function DetailFund({ funds }) {
  //constants
  const isHide = localStorage.getItem("hfiad") === "true" ? true : false
  const ICON = {
    true: <IoEyeOutline />,
    false: <IoEyeOffOutline />
  }

  //states
  const [showFunds, setShowFunds] = useState(isHide)

  //hooks
  const { handleShowValue, handleShowFunds } = useFormatFund(
    showFunds,
    setShowFunds
  )
  //effects
  useEffect(() => {
    handleShowValue(funds)
  }, [showFunds])

  return (
    <DetailFundWrapper>
      <Fund>{handleShowValue(funds)}</Fund>
      <Icon onClick={handleShowFunds}>{ICON[showFunds]}</Icon>
    </DetailFundWrapper>
  )
}

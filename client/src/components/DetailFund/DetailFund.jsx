import React, { useEffect, useState } from "react"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { DetailFundWrapper, Fund, Icon } from "./style"
import useFormatFund from "./hooks"

export default function DetailFund({ funds }) {
  //constants
  const isHide = localStorage.getItem("hfiad") === "true" ? true : false
  const ICON = {
    true: <BsEyeFill />,
    false: <BsEyeSlashFill />
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

import React from "react"
import { ButtonWrapper } from "./style"

export default function Button({ onClick, children, secondary }) {
  //constants
  const isSecondary = secondary ? true : false

  return <ButtonWrapper onClick={onClick} $secondary={isSecondary}>{children}</ButtonWrapper>
}

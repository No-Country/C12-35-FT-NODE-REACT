import React from "react"
import { ButtonWrapper } from "./style"

export default function Button({ children, secondary }) {
  //constants
  const isSecondary = secondary ? true : false

  return <ButtonWrapper $secondary={isSecondary}>{children}</ButtonWrapper>
}

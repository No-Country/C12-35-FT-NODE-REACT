import React from "react"
import { ButtonWrapper } from "./style"

<<<<<<< HEAD
export default function Button({ onClick, children, secondary }) {
=======
export default function Button({
  children,
  secondary,
  onClick,
  primary,
  primaryInverse,
  disabled,
  type
}) {
>>>>>>> cbc1c6bdb35fd19189ada40f693558935ad71b1d
  //constants
  const isSecondary = secondary ? true : false
  const isPrimary = primary ? true : false
  const isPrimaryInverse = primaryInverse ? true : false

<<<<<<< HEAD
  return <ButtonWrapper onClick={onClick} $secondary={isSecondary}>{children}</ButtonWrapper>
=======
  return (
    <ButtonWrapper
      typeStyle={
        isSecondary
          ? "$secondary"
          : isPrimary
          ? "$primary"
          : isPrimaryInverse
          ? "$primaryInverse"
          : null
      }
      disabled={disabled}
      onClick={onClick}
      type={type}>
      {children}
    </ButtonWrapper>
  )
>>>>>>> cbc1c6bdb35fd19189ada40f693558935ad71b1d
}

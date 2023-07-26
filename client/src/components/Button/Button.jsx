import React from "react"
import { ButtonWrapper } from "./style"

export default function Button({
  children,
  secondary,
  onClick,
  primary,
  primaryInverse,
  disabled,
  type
}) {
<<<<<<< HEAD
>>>>>>> cf67f95 (transfer money (partial) +routes  & estructure cards reusables)
=======
>>>>>>> 1751b2b (minor fixes and changes)
  //constants
  const isSecondary = secondary ? true : false
  const isPrimary = primary ? true : false
  const isPrimaryInverse = primaryInverse ? true : false

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
<<<<<<< HEAD
>>>>>>> cf67f95 (transfer money (partial) +routes  & estructure cards reusables)
=======
>>>>>>> 1751b2b (minor fixes and changes)
}

import React from "react";
import { ButtonWrapper } from "./style";

export default function Button({
  children,
  secondary,
  onClick,
  primary,
  primaryInverse,
  disabled,
  type,
}) {
  //constants
  const isSecondary = secondary ? true : false;
  const isPrimary = primary ? true : false;
  const isPrimaryInverse = primaryInverse ? true : false;

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
      type={type}
    >
      {children}
    </ButtonWrapper>
  );
}

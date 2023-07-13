import React from "react"
import { CustomButton } from "./style"

export default function DirectAccessButton({ link, children }) {
  return <CustomButton to={link}>{children}</CustomButton>
}

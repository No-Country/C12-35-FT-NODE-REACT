import React from "react"
import { Button } from "./style"

export default function DirectAccessButton({ link, children }) {
  return <Button to={link}>{children}</Button>
}

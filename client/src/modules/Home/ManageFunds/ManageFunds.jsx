import React from "react"
import { ManageFundsWrap, ManageFundsWrapper } from "./style"
import { Button } from "@/components"

export default function ManageFunds() {
  return (
    <ManageFundsWrapper>
      <ManageFundsWrap>
        <Button>Ingresar dinero</Button>
        <Button secondary>Transferir dinero</Button>
      </ManageFundsWrap>
    </ManageFundsWrapper>
  )
}

import React from "react"
import { ManageFundsWrap, ManageFundsWrapper } from "./style"
import { Button } from "@/components"
import { Link } from "react-router-dom"

export default function ManageFunds() {
  return (
    <ManageFundsWrapper>
      <ManageFundsWrap>
        <Button>Ingresar dinero</Button>
        <Link to='/app/transf'>
          <Button secondary>Transferir dinero</Button>
        </Link>
      </ManageFundsWrap>
    </ManageFundsWrapper>
  )
}

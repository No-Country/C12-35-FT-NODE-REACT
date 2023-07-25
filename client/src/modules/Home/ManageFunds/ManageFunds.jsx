import React from "react"
import { ManageFundsWrap, ManageFundsWrapper } from "./style"
import { Button } from "@/components"
import { Link } from "react-router-dom"

export default function ManageFunds() {
  return (
    <ManageFundsWrapper>
      <ManageFundsWrap>
        <Button>Ingresar dinero</Button>
        <Button secondary>
          <Link to='/app/transf'>Transferir dinero</Link>
        </Button>
      </ManageFundsWrap>
    </ManageFundsWrapper>
  )
}

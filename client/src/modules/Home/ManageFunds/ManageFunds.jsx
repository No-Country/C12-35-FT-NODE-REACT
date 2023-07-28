import React from "react"
import { ManageFundsWrap, ManageFundsWrapper } from "./style"
import { Button } from "@/components"
import { useNavigate, Link } from "react-router-dom"

export default function ManageFunds() {
  const navigate = useNavigate()

  const addMoney = () => {
    navigate("./add-money", { replace: false })
  }

  return (
    <ManageFundsWrapper>
      <ManageFundsWrap>
        <Link to='/app/addfunds'>
          <Button>Ingresar dinero</Button>
        </Link>
        <Link to='/app/transf'>
          <Button secondary>Transferir dinero</Button>
        </Link>
      </ManageFundsWrap>
    </ManageFundsWrapper>
  )
}

<<<<<<< HEAD
import React from "react"
import { ManageFundsWrap, ManageFundsWrapper } from "./style"
import { Button } from "@/components"
import { Link } from "react-router-dom"
=======
import React from "react";
import { ManageFundsWrap, ManageFundsWrapper } from "./style";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";
>>>>>>> a2b13d5 (first version addMoney)

export default function ManageFunds() {
  const navigate = useNavigate();

  const addMoney = () => {
    navigate('./add-money', {replace: false});
  }

  const sendMoney = () => {
    navigate('./send-money', {replace: false});
  }

  return (
    <ManageFundsWrapper>
      <ManageFundsWrap>
<<<<<<< HEAD
        <Button>Ingresar dinero</Button>
        <Button secondary>
          <Link to='/app/transf'>Transferir dinero</Link>
        </Button>
=======
        <Button onClick={addMoney}>Ingresar dinero</Button>
        <Button secondary onClick={sendMoney}>Transferir dinero</Button>
>>>>>>> a2b13d5 (first version addMoney)
      </ManageFundsWrap>
    </ManageFundsWrapper>
  )
}
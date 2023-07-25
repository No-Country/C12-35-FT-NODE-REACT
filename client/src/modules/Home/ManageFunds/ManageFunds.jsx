<<<<<<< HEAD
import React from "react";
import { ManageFundsWrap, ManageFundsWrapper } from "./style";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";
=======
import React from "react"
import { ManageFundsWrap, ManageFundsWrapper } from "./style"
import { Button } from "@/components"
import { Link } from "react-router-dom"
>>>>>>> 4fd6dbdd7f8d802fe980ae15f4026eceee288ee3

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
        <Button onClick={addMoney}>Ingresar dinero</Button>
        <Button secondary onClick={sendMoney}>Transferir dinero</Button>
=======
        <Button>Ingresar dinero</Button>
        <Button secondary>
          <Link to='/app/transf'>Transferir dinero</Link>
        </Button>
>>>>>>> 4fd6dbdd7f8d802fe980ae15f4026eceee288ee3
      </ManageFundsWrap>
    </ManageFundsWrapper>
  )
}
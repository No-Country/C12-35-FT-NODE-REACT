import React from "react";
import { ManageFundsWrap, ManageFundsWrapper } from "./style";
import { Button } from "@/components";
import { useNavigate, Link } from "react-router-dom";

export default function ManageFunds() {
  const navigate = useNavigate();

  const addMoney = () => {
    navigate('./add-money', {replace: false});
  }

  const sendMoney = () => {
    navigate('./transf', {replace: false});
  }

  return (
    <ManageFundsWrapper>
      <ManageFundsWrap>
<<<<<<< HEAD
        <Button onClick={addMoney}>Ingresar dinero</Button>
        <Button secondary onClick={sendMoney}>Transferir dinero</Button>
=======
        <Button>Ingresar dinero</Button>
        <Link to='/app/transf'>
          <Button secondary>Transferir dinero</Button>
        </Link>
>>>>>>> cbc1c6bdb35fd19189ada40f693558935ad71b1d
      </ManageFundsWrap>
    </ManageFundsWrapper>
  )
}
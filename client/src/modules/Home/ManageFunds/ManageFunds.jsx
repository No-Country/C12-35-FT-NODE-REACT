<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React from "react";
import { ManageFundsWrap, ManageFundsWrapper } from "./style";
import { Button } from "@/components";
import { useNavigate, Link } from "react-router-dom";
>>>>>>> d8ceb41 (progressing)
=======
import React from "react"
import { ManageFundsWrap, ManageFundsWrapper } from "./style"
import { Button } from "@/components"
import { useNavigate, Link } from "react-router-dom"
>>>>>>> 43b05c8 (cards implement for add funds)

export default function ManageFunds() {
  const navigate = useNavigate()

  const addMoney = () => {
    navigate("./add-money", { replace: false })
  }

  return (
    <ManageFundsWrapper>
      <ManageFundsWrap>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Button>Ingresar dinero</Button>
<<<<<<< HEAD
        <Button secondary>
          <Link to='/app/transf'>Transferir dinero</Link>
        </Button>
=======
        <Button onClick={addMoney}>Ingresar dinero</Button>
        <Button secondary onClick={sendMoney}>Transferir dinero</Button>
>>>>>>> a2b13d5 (first version addMoney)
=======
        <Button onClick={addMoney}>Ingresar dinero</Button>
        <Button secondary onClick={sendMoney}>Transferir dinero</Button>
>>>>>>> d8ceb41 (progressing)
=======
        <Link to='/app/transf'>
          <Button secondary>Transferir dinero</Button>
        </Link>
>>>>>>> cf67f95 (transfer money (partial) +routes  & estructure cards reusables)
=======
        <Button onClick={addMoney}>Ingresar dinero</Button>
=======
        <Link to='/app/addfunds'>
          <Button>Ingresar dinero</Button>
        </Link>
>>>>>>> 43b05c8 (cards implement for add funds)
        <Link to='/app/transf'>
          <Button secondary>Transferir dinero</Button>
        </Link>
>>>>>>> 1751b2b (minor fixes and changes)
      </ManageFundsWrap>
    </ManageFundsWrapper>
  )
}

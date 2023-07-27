import { AddCardsForm, CardForm, EstructureCards } from "@/modules"
import React from "react"
import { Wrapper } from "./style"
import { BsFillCreditCard2BackFill } from "react-icons/bs"

function addCard() {
  return (
    <EstructureCards
      returnRoute='/app/cards'
      icon={<BsFillCreditCard2BackFill />}
      title='Añadir tarjeta'>
      <Wrapper
        $backgroundColor='var(--background-card)'
        $borderRadius='var(--radius-light)'
        $padding='1rem'>
        <CardForm />
        <AddCardsForm />
      </Wrapper>
    </EstructureCards>
  )
}

export default addCard

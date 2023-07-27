import { Buttons, CardsSlider, EstructureCards } from "@/modules"
import React from "react"
import { BsFillCreditCard2BackFill } from "react-icons/bs"
import { TitleWrap, Wrapper } from "./style"

function Cards() {
  return (
    <>
      <EstructureCards
        returnRoute='/app/'
        icon={<BsFillCreditCard2BackFill />}
        title='Mis tarjetas'
        additions={<Buttons />}
        noBackground>
        <Wrapper>
          <TitleWrap>Tarjetas</TitleWrap>
          <CardsSlider />
        </Wrapper>
      </EstructureCards>
    </>
  )
}

export default Cards

import React from "react"
import { CardsSlider } from "@/modules"
import { MyCardsWrapper, TitleWrap, Wrapper } from "./style"
import { HeaderPageCard } from "@/components"
import { Buttons, EstructureCards } from "@/modules"
import { BsFillCreditCard2BackFill } from "react-icons/bs"

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

import React, { useState, useEffect } from "react"
import { StyledMyCards } from "./style"
import { Card, Carousel, ShowMore } from "@/components"
import { useSelector } from "react-redux"
import { CardPageMyCards } from "@/components"
import { CardsSlider } from "@/modules"

export default function MyCards() {
  const userData = useSelector((state) => state.auth)

  return (
    <StyledMyCards>
      <ShowMore little title='Tarjetas' link='/app/cards' />
      <CardsSlider>
        {userData.cards?.map((card) => {
          return <CardPageMyCards key={card?.id} cards={card} />
        })}
      </CardsSlider>
    </StyledMyCards>
  )
}

import React, { useState, useEffect } from "react"
import { StyledMyCards } from "./style"
import { Card, Carousel, ShowMore } from "@/components"
import { useSelector } from "react-redux"

export default function MyCards() {
  const userData = useSelector((state) => state.auth)

  return (
    <StyledMyCards>
      <ShowMore little title='Tarjetas' link='/Cards' />
      <Carousel>
        <Card
          width='150px'
          num='4123432123148365'
          nom={userData.user?.first_name + " " + userData.user?.last_name}
          fec='01/28'
        />
      </Carousel>
    </StyledMyCards>
  )
}

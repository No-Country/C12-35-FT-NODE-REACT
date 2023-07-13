import React from "react"
import { StyledMyCards } from "./style"
import { Card, Carousel, ShowMore } from "@/components"

export default function MyCards() {
  return (
    <StyledMyCards>
      <ShowMore little light title='Tarjetas' link='/Cards' />
      <Carousel>
        <Card
          width='150px'
          num='4134789023456789'
          nom='JUAN JOSÉ FARINA'
          fec='01/28'
        />
        <Card
          width='150px'
          num='5134789023456789'
          nom='JUAN JOSÉ FARINA'
          fec='01/28'
        />
        <Card
          width='150px'
          num='4134789023456789'
          nom='JUAN JOSÉ FARINA'
          fec='01/28'
        />
        <Card
          width='150px'
          num='5134789023456789'
          nom='JUAN JOSÉ FARINA'
          fec='01/28'
        />
        <Card
          width='150px'
          num='4134789023456789'
          nom='JUAN JOSÉ FARINA'
          fec='01/28'
        />
        <Card
          width='150px'
          num='5134789023456789'
          nom='JUAN JOSÉ FARINA'
          fec='01/28'
        />
        <Card
          width='150px'
          num='4134789023456789'
          nom='JUAN JOSÉ FARINA'
          fec='01/28'
        />
        <Card
          width='150px'
          num='5134789023456789'
          nom='JUAN JOSÉ FARINA'
          fec='01/28'
        />
      </Carousel>
    </StyledMyCards>
  )
}

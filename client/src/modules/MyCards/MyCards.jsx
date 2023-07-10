import React from 'react';
import StyledMyCards from './style';
import { Card, Carousel } from '@/components'

export default function MyCards() {
  return (
    <StyledMyCards>
      <div style={{display:'flex', justifyContent:'space-between'}}><h2>Tarjetas</h2><b>{'>'}</b></div>
      <Carousel>
        <Card width='150px' num="4134789023456789" nom="JUAN JOSÉ FARINA" fec="01/28" />
        <Card width='150px' num="5134789023456789" nom="JUAN JOSÉ FARINA" fec="01/28" />
        <Card width='150px' num="4134789023456789" nom="JUAN JOSÉ FARINA" fec="01/28" />
        <Card width='150px' num="5134789023456789" nom="JUAN JOSÉ FARINA" fec="01/28" />
        <Card width='150px' num="4134789023456789" nom="JUAN JOSÉ FARINA" fec="01/28" />
        <Card width='150px' num="5134789023456789" nom="JUAN JOSÉ FARINA" fec="01/28" />
        <Card width='150px' num="4134789023456789" nom="JUAN JOSÉ FARINA" fec="01/28" />
        <Card width='150px' num="5134789023456789" nom="JUAN JOSÉ FARINA" fec="01/28" />
      </Carousel>
    </StyledMyCards>
  )
}
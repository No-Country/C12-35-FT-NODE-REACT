import React from 'react';
import {
  ActionButton, 
  AmGroup, 
  Amount, 
  BackArrow, 
  CardWrapper, 
  Allowed, 
  FixedAm, 
  MiddleGroup, 
  Title, 
  UpperGroup 
} from './style';
import { BiLeftArrowAlt } from "react-icons/bi";

export default function AmountCard({ data }) {
  const { back, title, amount, amountHandler, allowed, add1, amo1, add2, amo2, add3, amo3, buttonText, next } = data;

  return (
    <CardWrapper>
        <UpperGroup>
            <BiLeftArrowAlt style={{fontSize:'30px', color:'#808080', cursor:'pointer'}} onClick={back} />
            <Title>{title}</Title>
            <div style={{width: 'auto'}} />
        </UpperGroup>
        <div style={{height: '50px'}} />
        <MiddleGroup>
            <Amount
              type='text'
              value={'$' + amount}
              onChange={amountHandler}
            />
            <Allowed>{allowed}</Allowed>
        </MiddleGroup>
        <AmGroup>
            <FixedAm onClick={add1}>{amo1}</FixedAm>
            <FixedAm onClick={add2}>{amo2}</FixedAm>
            <FixedAm onClick={add3}>{amo3}</FixedAm>
        </AmGroup>
        <ActionButton onClick={next}>{buttonText}</ActionButton>
    </CardWrapper>
  )
}
import React from 'react'
import { CardIconWrapper, DetailsWrap, TextAddCard } from "./style";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

function HeaderPageCards() {
  return (
    <DetailsWrap>
      <CardIconWrapper>
        <BsFillCreditCard2BackFill color="var(--primary)" size="1.3rem" />
      </CardIconWrapper>
      <TextAddCard>Mis tarjetas</TextAddCard>
    </DetailsWrap>
  );
}

export default HeaderPageCards;

import React from "react";
import { CardsSlider } from "@/modules";
import { MyCardsWrapper, TitleWrap, Wrapper } from "./style";
import { HeaderPageCard } from "@/components";
import { Buttons } from "@/modules";

function Cards() {
  return (
    <MyCardsWrapper>
      <HeaderPageCard />
      <Wrapper>
        <TitleWrap>Tarjetas</TitleWrap>
        <CardsSlider />
      </Wrapper>
      <Buttons />
    </MyCardsWrapper>
  );
}

export default Cards;

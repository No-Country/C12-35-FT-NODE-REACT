import React from "react";
import { Wrapper } from "./style";
import { HeaderPageCard } from "@/components";
import { CardForm, AddCardsForm } from "@/modules";

function addCard() {
  return (
    <Wrapper>
      <Wrapper>
        <Wrapper $marginBottom="1rem">
          <HeaderPageCard />
        </Wrapper>
        <Wrapper
          $backgroundColor="var(--background-card)"
          $borderRadius="var(--radius-light)"
          $padding="1rem"
        >
          <CardForm />
          <AddCardsForm />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default addCard;

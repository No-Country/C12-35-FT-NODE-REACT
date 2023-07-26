import React from "react";
import { CardWrap, Wrap } from "./style";
import { BackButton, FormCard } from "@/components";

function CardForm() {
  return (
    <CardWrap>
      <Wrap $alignItems="center">
        <BackButton />
      </Wrap>
      <Wrap $justifyContent="center">
        <FormCard />
      </Wrap>
    </CardWrap>
  );
}

export default CardForm;

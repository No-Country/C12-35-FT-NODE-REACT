import React from "react";
import { useEffect, useState } from "react";
import { CardWrapper, CustomWrap, Img, Span, TextWrap } from "./style";
import mastercard from "@/assets/images/logos/LogoMastercard.png";

function CardPageMyCards() {
  const [number, setNumber] = useState("");
  const [lastFourDigits, setLastFourDigits] = useState("");

  const numberCard = "1234567891234567";
  const expresionRegular = /(\d{4})(\d{4})(\d{4})(\d{4})/;
  const fourDigits = numberCard.match(/\d{4}$/)[0];
  const newNumber = numberCard.replace(expresionRegular, `xxxx xxxx xxxx `);

  useEffect(() => {
    setNumber(newNumber);
    setLastFourDigits(fourDigits);
  }, []);

  return (
    <CardWrapper $padding="1rem">
      <CustomWrap
        $display="flex"
        $justifyContente="center"
        $direction="column"
        $gap="1.3rem"
      >
        <TextWrap $fontSize="1.4rem">
          {number}
          <Span style={{ fontSize: "1rem" }}>{lastFourDigits}</Span>
        </TextWrap>
        <CustomWrap $display="flex" $alignItems="center" $gap="1rem">
          <CustomWrap>
            <TextWrap $fontSize=".5rem">titular</TextWrap>
            <TextWrap $fontSize=".6rem" $fontWeight="bold">
              Julieta Carolina Sosa
            </TextWrap>
          </CustomWrap>
          <CustomWrap>
            <TextWrap $fontSize=".5rem">Exp</TextWrap>
            <TextWrap $fontSize=".7rem" $fontWeight="bold">
              10/28
            </TextWrap>
          </CustomWrap>
          <CustomWrap>
            <Img
              $width="2rem"
              $height="2rem"
              src={mastercard}
              alt="mastercard logo"
            />
          </CustomWrap>
        </CustomWrap>
      </CustomWrap>
    </CardWrapper>
  );
}

export default CardPageMyCards;

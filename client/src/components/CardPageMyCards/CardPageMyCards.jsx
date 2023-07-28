import React from "react";
import { CardWrapper, CustomWrap, Img, Span, TextWrap } from "./style";
import mastercard from "@/assets/images/logos/LogoMastercard.png";
import visa from "@/assets/images/logos/LogoVisa.png";

function CardPageMyCards({cards}) {
  const {bank_branding, card_number, cardholder_name,expiration_date} = cards
  const expresionRegular = /(\d{4})(\d{4})(\d{4})(\d{4})/;
  const fourDigits = card_number.match(/\d{4}$/)[0];
  const newNumber = card_number.replace(expresionRegular, `xxxx xxxx xxxx `);

  return (
    <CardWrapper $padding="1rem">
      <CustomWrap
        $display="flex"
        $justifyContente="center"
        $direction="column"
        $gap="1.3rem"
      >
        <TextWrap $fontSize="1.6rem">
          {newNumber}
          <Span style={{ fontSize: "1.3rem" }}>{fourDigits}</Span>
        </TextWrap>
        <CustomWrap $display="flex" $alignItems="center" $gap="1rem">
          <CustomWrap>
            <TextWrap $fontSize=".5rem">titular</TextWrap>
            <TextWrap $fontSize=".7rem" $fontWeight="bold">
              {cardholder_name}
            </TextWrap>
          </CustomWrap>
          <CustomWrap>
            <TextWrap $fontSize=".5rem">Exp</TextWrap>
            <TextWrap $fontSize=".7rem" $fontWeight="bold">
              {expiration_date}
            </TextWrap>
          </CustomWrap>
          <CustomWrap>
            <Img
              $width="2rem"
              $height="2rem"
              src={bank_branding === "MASTERCAD" ? mastercard : visa}
              alt="mastercard logo"
            />
          </CustomWrap>
        </CustomWrap>
      </CustomWrap>
    </CardWrapper>
  );
}

export default CardPageMyCards;

import React from "react"
import { CardWrapper, CustomWrap, Img, Span, TextWrap } from "./style"
import mastercard from "@/assets/images/logos/LogoMastercard.png"
import visa from "@/assets/images/logos/LogoVisa.png"
import useLogos from "../../modules/CardAsMethod/hook"

function CardPageMyCards({ cards }) {
  const { bank_branding, card_number, cardholder_name, expiration_date } = cards
  const expresionRegular = /(\d{4})(\d{4})(\d{4})(\d{4})/
  const fourDigits = card_number.match(/\d{4}$/)[0]
  const newNumber = card_number.replace(expresionRegular, `xxxx xxxx xxxx `)

  //hooks
  const { setLogo } = useLogos()

  //formatter

  return (
    <CardWrapper $padding='1rem' bank_branding={bank_branding}>
      <CustomWrap
        $display='flex'
        $justifyContente='center'
        $direction='column'
        $gap='1.3rem'>
        <TextWrap $fontSize='1.6rem'>
          {newNumber}
          <Span style={{ fontSize: "1.3rem" }}>{fourDigits}</Span>
        </TextWrap>
        <CustomWrap
          $display='flex'
          $justifyContent='space-between'
          $alignItems='center'
          $gap='1rem'>
          <CustomWrap>
            <TextWrap $fontSize='.5rem'>titular</TextWrap>
            <TextWrap $fontSize='.7rem' $fontWeight='bold'>
              {cardholder_name.length >= 15
                ? `${cardholder_name.slice(0, 15)}...`
                : cardholder_name.slice(0, 15)}
            </TextWrap>
          </CustomWrap>
          <CustomWrap>
            <TextWrap $fontSize='.5rem'>Exp</TextWrap>
            <TextWrap $fontSize='.7rem' $fontWeight='bold'>
              {expiration_date}
            </TextWrap>
          </CustomWrap>
          <CustomWrap bank_branding={bank_branding}>
            {setLogo(bank_branding)}
          </CustomWrap>
        </CustomWrap>
      </CustomWrap>
    </CardWrapper>
  )
}

export default CardPageMyCards

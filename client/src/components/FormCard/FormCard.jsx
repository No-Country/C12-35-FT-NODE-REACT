import React from 'react'
import {  CardWrap, FieldDiv, FieldWrapper, MainFieldDiv, ShadowCard } from "./style";

function FormCard() {
  return (
  <CardWrap>
    <MainFieldDiv>
        <FieldWrapper $width="100%"/>
        <FieldDiv $display="flex" $gap="1rem">
            <FieldDiv $width="70%" $backGroundColor="#96b4ff30" $height="1.8rem" $borderRadius={true}/>
            <FieldDiv $width="30%" $backGroundColor="#96b4ff30" $height="1.8rem" $borderRadius={true}/>
        </FieldDiv>
    </MainFieldDiv>
    <ShadowCard/>
  </CardWrap>
)}

export default FormCard;

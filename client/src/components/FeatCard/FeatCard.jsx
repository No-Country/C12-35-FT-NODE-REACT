import React from 'react';
import { CardP, CardTitle, CardWrapper, ImageWrapper } from './style';

export default function FeatCard(props) {
  return (
    <CardWrapper>
        <CardTitle>{props.title}</CardTitle>
        <CardP>{props.text}</CardP>
        <ImageWrapper src={props.img} />
    </CardWrapper>
  )
}
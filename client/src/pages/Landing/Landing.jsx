import React from 'react';
import { 
    LandingWrapper, 
    Background, 
    SVGWrapper, 
    PathWrapper, 
    Hero, 
    StyledTitle, 
    StyledSub,
    TagsGroup,
    Tag
} from './style';
import { LandHeader } from "@/modules/";

document.body.style.overflow = 'hidden';

export default function Landing() {
  return (
    <LandingWrapper>
      <SVGWrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 72">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#4bffb3" />
            <stop offset="30%" stopColor="#4b66ff" />
            <stop offset="50%" stopColor="#4bffb3" />
            <stop offset="70%" stopColor="#4b66ff" />
            <stop offset="100%" stopColor="#4bffb3" />
          </linearGradient>
        </defs>
        <PathWrapper d="M70 -20 Q60 35 85 35 Q120 30 128 72 M0 30 Q5 55 40 55 Q55 55 50 72" fill="none" stroke="url(#gradient)" strokeWidth="10" />
      </SVGWrapper>
      <Background />
      <LandHeader />
      <Hero>
        <StyledTitle>El futuro de tus finanzas<br />está acá</StyledTitle>
        <StyledSub>Subite a la ola y descubrí la felicidiad de<br />manejar tu dinero con<span style={{color:'#4BFFB3'}}> FundWave</span></StyledSub>
        <TagsGroup>
          <Tag>Transferencias</Tag>
          <Tag>Débito</Tag>
          <Tag>Crédito</Tag>
          <span style={{width: '50px'}}></span>
          <Tag>Actividad</Tag>
          <Tag>Actividad</Tag>
        </TagsGroup>
      </Hero>
    </LandingWrapper>
  )
}
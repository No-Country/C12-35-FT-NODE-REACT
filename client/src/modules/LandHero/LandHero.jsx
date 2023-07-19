import React from 'react';
import { 
    Hero, 
    StyledTitle, 
    StyledSub,
    TagsGroup,
    Tag
} from './style';

export default function LandHero() {
  return (
    <Hero>
      <StyledTitle>El futuro de tus finanzas<br />está acá</StyledTitle>
      <StyledSub>Subite a la ola y descubrí la felicidiad de<br />manejar tu dinero con<span style={{fontFamily: "Inter", color:'#4BFFB3'}}> FundWave</span></StyledSub>
      <TagsGroup>
        <Tag>Transferencias</Tag>
        <Tag>Débito</Tag>
        <Tag>Crédito</Tag>
        <Tag>Actividad</Tag>
        <Tag>Actividad</Tag>
        <div style={{width: '20px'}} />
      </TagsGroup>
    </Hero>
  )
}
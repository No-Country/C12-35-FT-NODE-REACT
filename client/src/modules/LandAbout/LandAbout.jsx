import React from 'react';
import { AboutWrapper, AboutTitle, AboutGrid, AboutHero, HeroTitle, HeroP, AboutImage } from './style';
import about from '@/assets/images/Sobrenosotros.png';

export default function LandAbout() {
  return (
    <AboutWrapper id="nosotros">
      <AboutTitle>Sobre nosotros</AboutTitle>
      <AboutGrid>
        <AboutHero>
            <HeroTitle>Queremos que tengas la mejor experiencia con tus finanzas</HeroTitle>
            <HeroP>Por eso nuestro propósito es crear soluciones innovadoras y eficientes, para acelerar el proceso de inclusión financiera de las personas y que realices tus transacciones de manera segura.</HeroP>
        </AboutHero>
        <AboutImage src={about}></AboutImage>
      </AboutGrid>
    </AboutWrapper>
  )
}
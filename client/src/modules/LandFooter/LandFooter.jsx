import React from 'react';
import { Copyright, FooterItems, FooterWrapper, Item, ItemGroup, Items, Logo } from './style';
import logo from "@/assets/images/logos/ITTransparente.svg";
import { useNavigate } from "react-router-dom";

export default function LandFooter() {
  const navigate = useNavigate();

  const smoothScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const targetY = section.getBoundingClientRect().top + window.pageYOffset;
    const startingY = window.pageYOffset;
    const distance = targetY - startingY;
    const duration = 1000; // Adjust the duration as desired
    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutCubic = (t) => t < 0.5 ? 4 * t ** 3 : 1 - ((-2 * t + 2) ** 3) / 2;
      window.scrollTo(0, startingY + distance * easeInOutCubic(progress));

      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };


  const scrollToSection = (sectionId) => {
    setTimeout(() => { smoothScrollToSection(sectionId) }, 250);
    navigate('/', {replace: true});
  };

  return (
    <FooterWrapper>
      <FooterItems>
        <Logo src={logo} />
        <Items>
            <ItemGroup>
                <Item onClick={() => scrollToSection('beneficios')}>Beneficios</Item>
                <Item>Accesibilidad</Item>
            </ItemGroup>
            <ItemGroup>
                <Item onClick={() => scrollToSection('nosotros')}>Nosotros</Item>
                <Item>Cookies</Item>
            </ItemGroup>
            <ItemGroup>
                <Item onClick={() => scrollToSection('ayuda')}>Ayuda</Item>
                <Item>Legal</Item>
            </ItemGroup>
        </Items>
        <div style={{width:'20%'}} />
      </FooterItems>
      <Copyright>Copyright © 2023 FundWave S.R.L., Ciudad Autónoma de Buenos Aires, Argentina</Copyright>
    </FooterWrapper>
  )
}
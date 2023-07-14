import React from 'react';
import { FooterItems, FooterWrapper, ItemGroup, Items, Logo } from './style';
import logo from "@/assets/images/logos/Imagotipo.svg";

export default function LandFooter() {
  return (
    <FooterWrapper>
      <FooterItems>
        <Logo src={logo} />
        <Items>
            <ItemGroup>
                <div>Beneficios</div>
                <div>Accesibilidad</div>
            </ItemGroup>
            <ItemGroup>
                <div>Nosotros</div>
                <div>Cookies</div>
            </ItemGroup>
            <ItemGroup>
                <div>Ayuda</div>
                <div>Legal</div>
            </ItemGroup>
        </Items>
        <div style={{width:'20%'}} />
      </FooterItems>
    </FooterWrapper>
  )
}
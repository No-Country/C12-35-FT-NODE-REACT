import React from 'react';
import { FooterItems, FooterWrapper, Item, ItemGroup, Items, Logo } from './style';
import logo from "@/assets/images/logos/Imagotipo.svg";

export default function LandFooter() {
  return (
    <FooterWrapper>
      <FooterItems>
        <Logo src={logo} />
        <Items>
            <ItemGroup>
                <Item>Beneficios</Item>
                <Item>Accesibilidad</Item>
            </ItemGroup>
            <ItemGroup>
                <Item>Nosotros</Item>
                <Item>Cookies</Item>
            </ItemGroup>
            <ItemGroup>
                <Item>Ayuda</Item>
                <Item>Legal</Item>
            </ItemGroup>
        </Items>
        <div style={{width:'20%'}} />
      </FooterItems>
    </FooterWrapper>
  )
}
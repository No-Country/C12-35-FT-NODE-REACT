import React from 'react';
import { Copyright, FooterItems, FooterWrapper, Item, ItemGroup, Items, Logo } from './style';
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
      <Copyright>Copyright © 2023 FundWave S.R.L., Ciudad Autónoma de Buenos Aires, Argentina</Copyright>
    </FooterWrapper>
  )
}
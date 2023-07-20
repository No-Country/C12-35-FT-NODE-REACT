import { DirectAccessButton } from "@/components";
import React, { useState, useEffect, useRef } from "react";
import styles from './NavIcon.module.css';
import {
  GroupDirectButton,
  HeaderWrap,
  HeaderWrapper,
  LogoWrapper,
  NavWrapper,
  NavItem,
  IngresarButton,
  CrearButton,
  BurgerMenu,
  DDItem
} from "./style";
import imagotipo from '@/assets/images/logos/Imagotipo.svg';
import { useNavigate } from "react-router-dom";

export default function LandHeader() {
  const navigationRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = null; //placeholder para la llamada a la redux store y verificación del user
  const navigate = useNavigate();

  const logButtons = [
    {
      id: 1,
      slug: "Ingresar"
    },
    {
      id: 2,
      slug: "Crear cuenta"
    }
  ]

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (navigationRef.current && !navigationRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const goHome = () => {
    navigate('/', {replace: true});
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    navigationRef.current.classList.toggle('open');
  };

  return (
    <HeaderWrapper>
      <HeaderWrap>
        <LogoWrapper src={imagotipo} id='toHome' onClick={goHome} />
        <NavWrapper>
          <NavItem to='/'>Beneficios</NavItem>
          <NavItem to='/'>Nosotros</NavItem>
          <NavItem to='/'>Ayuda</NavItem>
        </NavWrapper>
        <GroupDirectButton>
          {user ? directAccess.map(({ id, slug, icon }) => {
            return (
              <DirectAccessButton key={id} link={slug}>
                {icon}
              </DirectAccessButton>
            )
          })
          :
          <>
            <IngresarButton to={'/srv/login'}>Ingresar</IngresarButton>
            <CrearButton to={'/srv/'}>Crear cuenta</CrearButton>
          </>
          }
        </GroupDirectButton>
        <BurgerMenu
          onClick={toggleMenu}
          className={isMenuOpen ? "open" : ""}
        >
          <div ref={navigationRef} id='navicon' className={styles.navicon5}>
            <span />
            <span />
            <span />
          </div><br />
          <DDItem to='/srv/login'>Ingresar</DDItem>
          <DDItem to='/srv/'>Crear cuenta</DDItem>
          <DDItem to='/'>Beneficios</DDItem>
          <DDItem to='/'>Nosotros</DDItem>
          <DDItem to='/'>Ayuda</DDItem>
        </BurgerMenu>
      </HeaderWrap>
    </HeaderWrapper>
  )
}
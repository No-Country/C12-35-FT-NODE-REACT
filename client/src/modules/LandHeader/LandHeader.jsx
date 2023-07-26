import React, { useState, useEffect, useRef } from "react"
import styles from "./NavIcon.module.css"
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
} from "./style"
import imagotipo from "@/assets/images/logos/Imagotipo.svg"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function LandHeader() {
  const userData = useSelector((state) => state.auth)
  const location = useLocation()
  const navigationRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const user = null //placeholder para la llamada a la redux store y verificación del user
  const navigate = useNavigate()

  const smoothScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    const targetY = section.getBoundingClientRect().top + window.pageYOffset
    const startingY = window.pageYOffset
    const distance = targetY - startingY
    const duration = 1000 // Adjust the duration as desired
    let start

    const step = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2
      window.scrollTo(0, startingY + distance * easeInOutCubic(progress))

      if (elapsed < duration) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      smoothScrollToSection(sectionId)
    }, 250)
    navigate("/", { replace: true })
  }

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
    document.addEventListener("click", handleClickOutside)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleClickOutside = (event) => {
    if (
      navigationRef.current &&
      !navigationRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false)
    }
  }

  const goHome = () => {
    navigate("/", { replace: true })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    navigationRef.current.classList.toggle("open")
  }

  return (
    <HeaderWrapper>
      <HeaderWrap>
        <LogoWrapper src={imagotipo} id='toHome' onClick={goHome} />
        <NavWrapper>
          {window.location.pathname === "/" ? (
            <>
              <NavItem
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("beneficios")
                }}>
                Beneficios
              </NavItem>
              <NavItem
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("nosotros")
                }}>
                Nosotros
              </NavItem>
              <NavItem
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("ayuda")
                }}>
                Ayuda
              </NavItem>
            </>
          ) : null}
        </NavWrapper>
        <GroupDirectButton>
          {console.log(userData.user.first_name)}
          {userData.id ? (
            <IngresarButton to={"/srv/login"}>Mi Perfil</IngresarButton>
          ) : (
            <>
              <IngresarButton to={"/srv/login"}>Ingresar</IngresarButton>
              <CrearButton to={"/srv/"}>Crear cuenta</CrearButton>
            </>
          )}
        </GroupDirectButton>
        <BurgerMenu onClick={toggleMenu} className={isMenuOpen ? "open" : ""}>
          <div ref={navigationRef} id='navicon' className={styles.navicon5}>
            <span />
            <span />
            <span />
          </div>
          <br />
          <DDItem to='/srv/login'>Ingresar</DDItem>
          <DDItem to='/srv/'>Crear cuenta</DDItem>
          <DDItem
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("beneficios")
            }}>
            Beneficios
          </DDItem>
          <DDItem
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("nosotros")
            }}>
            Nosotros
          </DDItem>
          <DDItem
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("ayuda")
            }}>
            Ayuda
          </DDItem>
        </BurgerMenu>
      </HeaderWrap>
    </HeaderWrapper>
  )
}

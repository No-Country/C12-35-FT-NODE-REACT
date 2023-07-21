import { logoutUser } from "@@/queries"
import React from "react"
import { BsCollectionFill, BsFillCreditCardFill } from "react-icons/bs"
import {
  IoExit,
  IoHelpCircle,
  IoHomeSharp,
  IoPersonCircle
} from "react-icons/io5"
import {
  AsideWrap,
  AsideWrapper,
  GoTo,
  Icon,
  Logout,
  NavItem,
  NavRoutes,
  NavShortcuts
} from "./style"
import { useDispatch } from "react-redux"
import { setAuth } from "@/store/features/authSlice"

export default function Aside() {
  const dispatch = useDispatch()
  //constants
  const NAV_ROUTE_ITEMS = [
    { id: 1, name: "Inicio", icon: <IoHomeSharp />, link: "/app/" },
    {
      id: 2,
      name: "Mi perfil",
      icon: <IoPersonCircle />,
      link: "/app/profile"
    },
    { id: 3, name: "Ayuda", icon: <IoHelpCircle />, link: "/app/help" }
  ]

  const NAV_SHORTCUT_ITEMS = [
    {
      id: 1,
      name: "Actividad",
      icon: <BsCollectionFill />,
      link: "/app/activity"
    },
    {
      id: 2,
      name: "Tarjetas",
      icon: <BsFillCreditCardFill />,
      link: "/app/cards"
    }
  ]

  const handleLogout = () => {
    dispatch(
      logoutUser(() => {
        dispatch(setAuth({}))
      })
    )
  }

  return (
    <AsideWrapper>
      <AsideWrap>
        <div>
          <NavRoutes>
            {NAV_ROUTE_ITEMS.map(({ id, name, icon, link }) => (
              <NavItem key={id}>
                <GoTo to={link}>
                  <Icon>{icon}</Icon> {name}
                </GoTo>
              </NavItem>
            ))}
          </NavRoutes>
          <NavShortcuts>
            {NAV_SHORTCUT_ITEMS.map(({ id, name, icon, link }) => (
              <NavItem key={id}>
                <GoTo to={link}>
                  <Icon>{icon}</Icon> {name}
                </GoTo>
              </NavItem>
            ))}
          </NavShortcuts>
        </div>
        <Logout onClick={logoutUser}>
          <Icon>
            <IoExit />
          </Icon>
          Salir
        </Logout>
      </AsideWrap>
    </AsideWrapper>
  )
}

import React from "react"
import { Wrapper, Wrap, Header, Content, Additions } from "./style"

import { BiLeftArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom"

export default function EstructureCards({
  icon,
  firstName,
  children,
  additions,
  title,
  returnRoute
}) {
  return (
    <Wrapper>
      <Link to={returnRoute}>
        <BiLeftArrowAlt />
      </Link>
      <Wrap>
        <Header>
          <span>{icon}</span>
          {firstName ? <h3>¡Hola {firstName}!</h3> : <h3>{title}</h3>}
        </Header>
        <Content>{children}</Content>
        {additions && <Additions>{additions}</Additions>}
      </Wrap>
    </Wrapper>
  )
}
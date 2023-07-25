import React from "react"
import { Wrapper, Wrap, Header, Content, Additions } from "./style"

export default function EstructureCards({
  icon,
  firstName,
  children,
  additions
}) {
  return (
    <Wrapper>
      <Wrap>
        <Header>
          <span>{icon}</span>
          <h3>¡Hola {firstName}!</h3>
        </Header>
        <Content>{children}</Content>
        <Additions>{additions}</Additions>
      </Wrap>
    </Wrapper>
  )
}

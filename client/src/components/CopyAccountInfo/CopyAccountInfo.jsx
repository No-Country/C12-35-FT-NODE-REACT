import React from "react"
import { IoCopy } from "react-icons/io5"
import { toast } from "react-toastify"
import { Copy, Title, Value, Wrap, Wrapper } from "./style"
import { toastConfig } from "./toastConfig"

export default function CopyAccountInfo({ title, value }) {
  //functions
  const copy = (value, title) => {
    navigator.clipboard.writeText(value, title)
    toast.success(`¡Listo! Tu ${title} fue copiado.`, toastConfig)
  }

  return (
    <Wrapper>
      <Wrap>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Wrap>
      <Copy onClick={() => copy(value, title)}>
        <IoCopy />
      </Copy>
    </Wrapper>
  )
}

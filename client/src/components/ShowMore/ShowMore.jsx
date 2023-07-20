import React from "react"
import { IoIosArrowForward } from "react-icons/io"
import { ShortCut, Title } from "./style"

export default function ShowMore({ title, link, little }) {
  //constants
  const SIZE = little ? "1rem" : "1.2rem"
  const isLittle = little ? true : false

  return (
    <ShortCut to={link}>
      <Title $little={isLittle}>{title}</Title>
      <IoIosArrowForward size={SIZE} />
    </ShortCut>
  )
}

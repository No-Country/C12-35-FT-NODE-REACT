import imagotipo from "@/assets/images/logos/Imagotipo.svg"
import { DirectAccessButton } from "@/components"
import React from "react"
import { FaQuestion } from "react-icons/fa"
import { HeaderWrap, LogoWrapper } from "./style"

function NavForm() {
  return (
    <HeaderWrap>
      <LogoWrapper src={imagotipo} />
      <DirectAccessButton link={"/faq"} children={FaQuestion} />
    </HeaderWrap>
  )
}

export default NavForm

import React from "react"
import { Icon, Title, Tool } from "./style"
import { IoIosArrowForward } from "react-icons/io"

export default function UserTool({ data }) {
  //constants
  const { icon, title, link, subtitle, onClick, resalt } = data

  return (
    <Tool to={link} onClick={onClick}>
      <div>
        <span>{icon}</span>
        <Title>
          <h3>{title}</h3>
          {subtitle && <h4 className={resalt ? "resalt" : null}>{subtitle}</h4>}
        </Title>
      </div>
      <Icon>
        <IoIosArrowForward />
      </Icon>
    </Tool>
  )
}

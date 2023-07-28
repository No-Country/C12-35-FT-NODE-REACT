import React from "react"
import {
  CardAsMethodWrap,
  CardAsMethodWrapper,
  CardBankLogo,
  CardExpiration,
  CardNumber
} from "./style"
import useLogos from "./hook"
import { useNavigate } from "react-router-dom"

export default function CardAsMethod({ cardInfo }) {
  const { bank_branding, card_number, expiration_date, id } = cardInfo

  //hooks
  const { setLogo } = useLogos()
  const navigate = useNavigate()

  //functions
  const nextRoute = (id) => {
    navigate(`${id}`)
  }

  return (
    <CardAsMethodWrapper
      bank_branding={bank_branding}
      onClick={() => nextRoute(id)}>
      <CardAsMethodWrap>
        <CardNumber>.... {card_number.slice(12, 16)}</CardNumber>
        <CardExpiration>Vencimiento {expiration_date}</CardExpiration>
        <CardBankLogo bank_branding={bank_branding}>
          {setLogo(bank_branding)}
        </CardBankLogo>
      </CardAsMethodWrap>
    </CardAsMethodWrapper>
  )
}

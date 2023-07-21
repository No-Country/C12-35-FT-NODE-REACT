import React, { useState, useEffect } from "react"
import StyledCard from "./style.js"
import visa from "@/assets/images/logos/LogoVisa.png"
import mastercard from "@/assets/images/logos/LogoMastercard.png"

export default function Card(props) {
  const [comp, setComp] = useState("")
  const { num, nom, fec } = props

  useEffect(() => {
    switch (props.num[0]) {
      case "2":
      case "5":
        setComp(mastercard)
        break
      case "4":
        setComp(visa)
        break
      default:
        setComp("")
        break
    }
  }, [num, nom, fec])

  return (
    <StyledCard w={props.width}>
      <div>
        <img src={comp} alt='' />
      </div>
      <div></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          letterSpacing: "2px"
        }}>
        <span>****</span>
        <span>****</span>
        <span>****</span>
        <span>{num.slice(12, 16)}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{nom}</span>
        <span>{fec}</span>
      </div>
    </StyledCard>
  )
}

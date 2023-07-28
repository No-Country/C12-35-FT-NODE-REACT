import { EstructureCards, CardsList } from "@/modules"
import { useIcons } from "@@/global/customIcons"
import React from "react"
import { IoCashSharp } from "react-icons/io5"
import { useSelector } from "react-redux"

export default function AddMoneyMethod() {
  //redux
  const CARDS = useSelector((state) => state.auth?.cards)
  console.log(CARDS)
  return (
    <EstructureCards
      returnRoute='/app/addfunds'
      icon={<IoCashSharp />}
      title='Seleccioná un método de ingreso'
      noBackground
      noChildren
      additions={<CardsList cards={CARDS} />}
    />
  )
}

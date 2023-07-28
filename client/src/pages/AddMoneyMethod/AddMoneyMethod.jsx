import { EstructureCards, CardsList } from "@/modules"
import React from "react"
import { IoCashSharp } from "react-icons/io5"
import { useSelector } from "react-redux"

export default function AddMoneyMethod() {
  //redux
  const CARDS = useSelector((state) => state.auth?.cards)
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

import React from "react"
import { CardAsMethod } from "@/modules"

export default function CardsList({ cards }) {
  return (
    <>
      {cards?.map((card) => {
        return <CardAsMethod key={card.id} cardInfo={card} />
      })}
    </>
  )
}

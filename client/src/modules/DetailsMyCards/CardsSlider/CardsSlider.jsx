import React from "react"
import { Slider, SliderWrapper } from "./style"
import { CardPageMyCards } from "@/components"
import { useCards } from "./hook"
import { useSelector } from "react-redux"

function CardsSlider() {
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useCards()
  const cards = useSelector((state) => state.auth.cards)

  return (
    <SliderWrapper
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
      <Slider>
        {cards.map((el) => (
          <CardPageMyCards cards={el} key={el?.id} />
        ))}
      </Slider>
    </SliderWrapper>
  )
}

export default CardsSlider

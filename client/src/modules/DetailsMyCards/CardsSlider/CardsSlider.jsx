import React from "react";
import { Slider, SliderWrapper } from "./style";
import { CardPageMyCards } from "@/components";
import { useCards } from "./hook";

function CardsSlider() {
  const arrayUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useCards();
  return (
    <SliderWrapper
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Slider>
        {arrayUsers.map((el) => (
          <CardPageMyCards key={el} />
        ))}
      </Slider>
    </SliderWrapper>
  );
}

export default CardsSlider;

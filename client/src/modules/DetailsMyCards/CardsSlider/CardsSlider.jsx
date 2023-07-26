import React, { useEffect, useState } from "react";
import { Slider, SliderWrapper } from "./style";
import { CardPageMyCards } from "@/components";
import { useCards } from "./hook";

function CardsSlider() {
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } = useCards();
  
  const [cards, setCards] = useState([]);
  
  return (
    <SliderWrapper
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Slider>
        {cards.map((el) => (
          <CardPageMyCards key={el} />
        ))}
      </Slider>
    </SliderWrapper>
  );
}

export default CardsSlider;

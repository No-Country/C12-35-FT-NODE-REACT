import React, { useState, useRef } from 'react';
import StyledCarousel from './style';

export default function Carousel(props) {
  const [drag, setDrag] = useState(false);
  const [prevX, setPrevX] = useState('');
  const [prevScroll, setPrevScroll] = useState('');
  const carousel = useRef(null);

  const dragStart = (e) => {
    setDrag(true);
    setPrevX(e.pageX);
    setPrevScroll(carousel.current.scrollLeft);
    console.log(carousel.current.scrollLeft);
  }

  const dragging = (e) => {
    if(!drag) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevX;
    carousel.current.scrollLeft = prevScroll - positionDiff;
  }

  const dragStop = (e) => {
    setDrag(false);
  }

  return (
    <StyledCarousel
      ref={carousel}
      onMouseDown={dragStart}
      onMouseMove={dragging}
      onMouseUp={dragStop}
    >
        {props.children}
    </StyledCarousel>
  )
}
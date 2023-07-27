import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"

export const NewsWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: auto;
`

export const NewsWrap = styled(Swiper)`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-cards);
  box-shadow: var(--shadow-primary);
  background-color: var(--background-card);
`

export const NewsTitle = styled.h3``

export const NewsItem = styled(SwiperSlide)`
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

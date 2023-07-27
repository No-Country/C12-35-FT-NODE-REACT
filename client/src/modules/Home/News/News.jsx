import React from "react"
import { NewsItem, NewsTitle, NewsWrap, NewsWrapper } from "./style"
import new1 from "@/assets/images/utils/Novedad_1.png"
import new2 from "@/assets/images/utils/Novedad_2.png"
import new3 from "@/assets/images/utils/Novedad_3.png"
import { Pagination } from "swiper/modules"

export default function News() {
  //constans
  const NEWS_DATA = [
    { id: 1, src: new1 },
    { id: 2, src: new2 },
    { id: 3, src: new3 }
  ]

  return (
    <NewsWrapper>
      <NewsTitle>Novedades</NewsTitle>
      <NewsWrap
        modules={[Pagination]}
        pagination={{
          clickable: true
        }}>
        {NEWS_DATA?.map(({ id, src }) => {
          return (
            <NewsItem key={id}>
              <img src={src} />
            </NewsItem>
          )
        })}
      </NewsWrap>
    </NewsWrapper>
  )
}

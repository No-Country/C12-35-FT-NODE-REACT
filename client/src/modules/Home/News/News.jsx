import React from "react"
import { NewsItem, NewsTitle, NewsWrap, NewsWrapper } from "./style"

export default function News() {
  return (
    <NewsWrapper>
      <NewsTitle>Novedades</NewsTitle>
      <NewsWrap>
        <NewsItem>{/* <Image src={} alt={} /> */}</NewsItem>
      </NewsWrap>
    </NewsWrapper>
  )
}

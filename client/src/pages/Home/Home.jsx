import React from "react"
import { RecentActivity, News, Header } from "@/modules/Home"
import { HomeWrap, HomeWrapper, LeftWrap, RigthWrap } from "./style"

export default function Home() {
  return (
    <HomeWrapper>
      <Header />
      <HomeWrap>
        <LeftWrap>
          <News />
        </LeftWrap>
        <RigthWrap>
          <RecentActivity />
        </RigthWrap>
      </HomeWrap>
    </HomeWrapper>
  )
}

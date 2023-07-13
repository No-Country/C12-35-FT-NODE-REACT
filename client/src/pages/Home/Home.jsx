import React from "react"
import { RecentActivity, News, MyCards, ManageFunds } from "@/modules/Home"
import { HomeWrap, HomeWrapper, LeftWrap, RigthWrap } from "./style"
import { AvailableCredict } from "@/components"

export default function Home() {
  return (
    <HomeWrapper>
      <HomeWrap>
        <LeftWrap>
          <AvailableCredict />
          <ManageFunds />
          <MyCards />
          <News />
        </LeftWrap>
        <RigthWrap>
          <RecentActivity />
        </RigthWrap>
      </HomeWrap>
    </HomeWrapper>
  )
}

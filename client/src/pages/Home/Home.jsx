import React from "react"
import {
  RecentActivity,
  News,
  MyCards,
  ManageFunds,
  AccountFund
} from "@/modules/Home"
import { HomeWrap, HomeWrapper, LeftWrap, RigthWrap } from "./style"

export default function Home() {
  return (
    <HomeWrapper>
      <HomeWrap>
        <LeftWrap>
          <div>
            <AccountFund />
            <ManageFunds />
          </div>
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

import React from "react"
<<<<<<< HEAD
import { RecentActivity, News, MyCards} from "@/modules/Home"
=======
import { RecentActivity, News, MyCards } from "@/modules/Home"
>>>>>>> ba46166d0c198efd1ae211bee831b1fd9c850023
import { HomeWrap, HomeWrapper, LeftWrap, RigthWrap } from "./style"

export default function Home() {
  return (
    <HomeWrapper>
      <HomeWrap>
        <LeftWrap>
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

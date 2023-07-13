import { ActivityItem, ShowMore } from "@/components"
import React from "react"

import { ListActivity, Wrap, Wrapper } from "./style"

export default function RecentActivity() {
  const fakeData = [
    {
      id: 1,
      type: "transfer",
      time: "16:40"
    },
    {
      id: 2,
      type: "transfer",
      time: "12:32"
    },
    {
      id: 3,
      type: "send",
      time: "11:00"
    },
    {
      id: 4,
      type: "payment",
      time: "08:46"
    }
  ]
  return (
    <Wrapper>
      <Wrap>
        <ShowMore title='Actividad' link='/activity' />
        <ListActivity>
          {fakeData.map(({ id, type, time }) => {
            return <ActivityItem key={id} type={type} time={time} />
          })}
        </ListActivity>
      </Wrap>
    </Wrapper>
  )
}

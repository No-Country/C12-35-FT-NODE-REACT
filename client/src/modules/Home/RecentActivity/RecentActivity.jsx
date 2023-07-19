import { ActivityItem, ShowMore } from "@/components"
import React from "react"

import { ListActivity, Wrap, Wrapper } from "./style"

export default function RecentActivity() {
  const fakeData = [
    {
      id: 1,
      type: "transfer",
      time: "2023-07-19T16:11:28.000Z",
      amount: 5906
    },
    {
      id: 2,
      type: "transfer",
      time: "2023-07-19T16:11:28.000Z",
      amount: 5901
    },
    {
      id: 3,
      type: "send",
      time: "2023-07-19T16:06:28.000Z",
      amount: 1202
    },
    {
      id: 4,
      type: "send",
      time: "2023-07-19T16:11:28.000Z",
      amount: 1190
    },
    {
      id: 5,
      type: "send",
      time: "2023-07-19T16:10:28.000Z",
      amount: 59
    },
    {
      id: 6,
      type: "send",
      time: "2021-08-31T17:32:28.000Z",
      amount: 52
    },
    {
      id: 7,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 123
    },
    {
      id: 8,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 590
    },
    {
      id: 9,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 1000
    },
    {
      id: 10,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 1150
    },
    {
      id: 11,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 1150
    },
    {
      id: 12,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 590
    }
  ]
  return (
    <Wrapper>
      <Wrap>
        <ShowMore title='Actividad' link='/activity' />
        <ListActivity>
          {fakeData.map(({ id, type, time, amount }) => {
            return (
              <ActivityItem key={id} type={type} amount={amount} time={time} />
            )
          })}
        </ListActivity>
      </Wrap>
    </Wrapper>
  )
}

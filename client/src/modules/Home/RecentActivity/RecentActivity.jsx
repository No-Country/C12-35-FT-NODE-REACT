import { ActivityItem, ShowMore } from "@/components"
import React from "react"

import { ListActivity, Wrap, Wrapper } from "./style"

export default function RecentActivity() {
  const fakeData = [
    {
      id: 1,
      type: "transfer",
      time: "2023-07-19T16:11:28.000Z",
      amount: 5906,
      userDestination: "Marcelo Tinelli"
    },
    {
      id: 2,
      type: "transfer",
      time: "2023-07-19T16:11:28.000Z",
      amount: 5901,
      userDestination: "Juan Sosa"
    },
    {
      id: 3,
      type: "send",
      time: "2023-07-19T16:06:28.000Z",
      amount: 1202,
      userDestination: "Juan Sosa"
    },
    {
      id: 4,
      type: "send",
      time: "2023-07-19T16:11:28.000Z",
      amount: 1190,
      userDestination: "Roberto Aguilar"
    },
    {
      id: 5,
      type: "send",
      time: "2023-07-19T16:10:28.000Z",
      amount: 59,
      userDestination: "Matias Perez"
    },
    {
      id: 6,
      type: "send",
      time: "2021-08-31T17:32:28.000Z",
      amount: 52,
      userDestination: "Julieta Sosa"
    },
    {
      id: 7,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 123,
      userDestination: "Augusto Alfonoso"
    },
    {
      id: 8,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 590,
      userDestination: "Alberto Fernandez"
    },
    {
      id: 9,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 1000,
      userDestination: "Javier Milei"
    },
    {
      id: 10,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 1150,
      userDestination: "Hugo Moyano"
    },
    {
      id: 11,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 1150,
      userDestination: "Javier Rodriguez"
    },
    {
      id: 12,
      type: "transfer",
      time: "2021-08-31T17:32:28.000Z",
      amount: 590,
      userDestination: "Pedro Sanchez"
    }
  ]
  return (
    <Wrapper>
      <Wrap>
        <ShowMore title='Actividad' link='/activity' />
        <ListActivity>
          {fakeData.map(({ id, type, time, amount, userDestination }) => {
            return (
              <ActivityItem
                key={id}
                type={type}
                amount={amount}
                time={time}
                userDestination={userDestination}
              />
            )
          })}
        </ListActivity>
      </Wrap>
    </Wrapper>
  )
}

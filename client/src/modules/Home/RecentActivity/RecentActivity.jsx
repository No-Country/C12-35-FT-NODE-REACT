import { ActivityItem, ShowMore } from "@/components"
import React, { useEffect, useState } from "react"

import { ListActivity, Wrap, Wrapper } from "./style"
import { historyTransactions } from "@@/queries/Transaction"
import { useDispatch } from "react-redux"

export default function RecentActivity() {
  //redux
  const dispatch = useDispatch()
  //states
  const [transactions, setTransactions] = useState(null)

  //effects
  useEffect(() => {
    dispatch(historyTransactions()).then(({ payload }) => {
      setTransactions(payload.data.transactions)
    })
  }, [])

  return (
    <Wrapper>
      <Wrap>
        <ShowMore title='Actividad' link='/activity' />
        <ListActivity>
          {transactions?.map(({ id, type, date, amount, userDestination }) => {
            return (
              <ActivityItem
                key={id}
                type={type}
                amount={amount}
                time={date}
                userDestination={userDestination}
              />
            )
          })}
        </ListActivity>
      </Wrap>
    </Wrapper>
  )
}

import { ActivityItem, ShowMore } from "@/components"
import React, { useEffect, useState } from "react"

import { EmptyActivity, ListActivity, Wrap, Wrapper } from "./style"
import { useDispatch, useSelector } from "react-redux"

export default function RecentActivity() {
  //redux
  const userData = useSelector((state) => state.auth)
  return (
    <Wrapper>
      <Wrap>
        <ShowMore title='Actividad' link='/activity' />
        <ListActivity>
          {userData?.transactions?.length < 1 ? (
            <EmptyActivity>No hay actividad reciente</EmptyActivity>
          ) : (
            userData?.transactions?.map(({ id, type, date, amount }) => {
              return (
                <ActivityItem
                  key={id}
                  type={type}
                  amount={amount}
                  time={date}
                />
              )
            })
          )}
        </ListActivity>
      </Wrap>
    </Wrapper>
  )
}

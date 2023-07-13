import { Header } from "@/modules/Home"
import Cookies from "js-cookie"
import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Wrap, Wrapper } from "./style"
import { Aside } from "@/modules"

export default function AuthRequire() {
  const isAuthenticated = Cookies.get("accessToken") ? true : false

  if (!isAuthenticated) return <Navigate to='/srv/login' />

  return (
    <Wrapper>
      <Aside />
      <Header />
      <Wrap>
        <Outlet />
      </Wrap>
    </Wrapper>
  )
}

import { Aside } from "@/modules"
import { Header } from "@/modules/Home"
import Cookies from "js-cookie"
import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { StyledToastContainer, Wrap, Wrapper } from "./style"
import { LandHeader } from "@/modules/LandHeader"

export default function AuthRequire() {
  const isAuthenticated = Cookies.get("accessToken") ? true : false

  if (!isAuthenticated) return <Navigate to='/srv/login' />

  return (
    <>
      <LandHeader />
      <Wrapper>
        <StyledToastContainer limit={3} />
        <Aside />
        {/* <Header /> */}
        <Wrap>
          <Outlet />
        </Wrap>
      </Wrapper>
    </>
  )
}

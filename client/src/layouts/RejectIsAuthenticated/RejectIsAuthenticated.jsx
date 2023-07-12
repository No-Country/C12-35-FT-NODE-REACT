import Cookies from "js-cookie"
import React from "react"
import { Navigate, Outlet } from "react-router-dom"

export default function RejectIsAuthenticated() {
  const isAuthenticated = Cookies.get("accessToken") ? true : false

  if (isAuthenticated) return <Navigate to='/app' />

  return <Outlet />
}

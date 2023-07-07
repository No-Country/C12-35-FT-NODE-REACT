import React from "react"
import { Route, Routes } from "react-router-dom"

import { RejectIsAuthenticated, AuthRequire } from "@/layouts"
import { Home } from "@/pages"
import { LoginForm } from "@/pages/LoginForm"
import { RegisterForm } from "@/pages/RegisterForm"
import { Main } from "./style"

const AppRoutes = () => {
  return (
    <Main>
      <Routes>
        {/* Public routes */}
        <Route path='/srv' element={<RegisterForm />} />
        <Route path='/srv/login' element={<LoginForm />} />

        {/* Error routes */}
        <Route path='*' element={<div>ERROR PAGE</div>} />

        {/* Auth required routes */}
        <Route path='/' element={<AuthRequire />}>
          <Route index element={<Home />} />
        </Route>

        {/* Not passing if authenticated routes */}
        <Route path='/srv' element={<RejectIsAuthenticated />}></Route>
      </Routes>
    </Main>
  )
}

export default AppRoutes

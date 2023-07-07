import React from "react"
import { Route, Routes } from "react-router-dom"

import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
import { LoginForm, RegisterForm } from "@/modules"
import { Home } from "@/pages"
import { Main, MainContainer } from "./style"

const AppRoutes = () => {
  return (
    <Main>
      <MainContainer>
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
      </MainContainer>
    </Main>
  )
}

export default AppRoutes

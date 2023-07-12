import React from "react"
import { Route, Routes } from "react-router-dom"
import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
import { Landing, Home } from "@/pages"
import { Main, MainContainer } from "./style"
import { Login, Register } from "@/modules"

const AppRoutes = () => {
  return (
    <Main>
      <MainContainer>
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<Landing />} />
          <Route path='/srv' element={<RegisterForm />} />
          <Route path='/srv/login' element={<LoginForm />} />

          {/* Error routes */}
          <Route path='*' element={<div>ERROR PAGE</div>} />

          {/* Auth required routes */}
          <Route path='/app' element={<AuthRequire />}>
            <Route index element={<Home />} />
          </Route>

          {/* Not passing if authenticated routes */}
          <Route path='/srv' element={<RejectIsAuthenticated />}>
            <Route index element={<Register />} />
            <Route path='/srv/login' element={<Login />} />
          </Route>
        </Routes>
      </MainContainer>
    </Main>
  )
}

export default AppRoutes
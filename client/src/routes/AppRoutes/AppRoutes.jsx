import React from "react"
import { Route, Routes } from "react-router-dom"
import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
import { Landing, Home, Account } from "@/pages"
import { Main, MainContainer } from "./style"

const AppRoutes = () => {
  return (
    <Main>
      <MainContainer>
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<Landing />} />

          {/* Error routes */}
          <Route path='*' element={<div>ERROR PAGE</div>} />

          {/* Auth required routes */}
          <Route path='/app' element={<AuthRequire />}>
            <Route index element={<Home />} />
          </Route>

          {/* Not passing if authenticated routes */}
          <Route path='/srv' element={<RejectIsAuthenticated />}>
            <Route index element={<Account type='Register' />} />
            <Route path='/srv/login' element={<Account type='Login' />} />
          </Route>
        </Routes>
      </MainContainer>
    </Main>
  )
}

export default AppRoutes
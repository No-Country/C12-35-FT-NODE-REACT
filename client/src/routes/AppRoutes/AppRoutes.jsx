import React from "react"
import { Route, Routes } from "react-router-dom"
import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
<<<<<<< HEAD
import { Landing, Home } from "@/pages"
=======
import { Home, Account } from "@/pages"
>>>>>>> 9e04aa40ac5787710f9d8c6378c3b888d100d3a5
import { Main, MainContainer } from "./style"

const AppRoutes = () => {
  return (
    <Main>
      <MainContainer>
        <Routes>
          {/* Public routes */}
<<<<<<< HEAD
          <Route path='/' element={<Landing />} />
=======
          <Route path='/' element={<div>Landing...</div>} />
>>>>>>> 9e04aa40ac5787710f9d8c6378c3b888d100d3a5

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
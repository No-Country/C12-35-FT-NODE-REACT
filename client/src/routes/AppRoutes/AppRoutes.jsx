import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
import { Account, Home, Landing, Profile, TransferMoney } from "@/pages"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Main, MainContainer } from "./style"

const AppRoutes = () => {
  return (
    <Main>
      <MainContainer>
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<Landing />} />

          {/* Error routes */}
          <Route path='*' element={<Landing />} />

          {/* Auth required routes */}
          <Route path='/app/' element={<AuthRequire />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path='transf' element={<TransferMoney />} />
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

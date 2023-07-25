import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
<<<<<<< HEAD
import { Account, Home, Landing, Profile, TransferMoney } from "@/pages"
=======
import { Account, Home, Landing, Profile, AddMoney } from "@/pages"
>>>>>>> a2b13d5 (first version addMoney)
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
<<<<<<< HEAD
            <Route path='transf' element={<TransferMoney />} />
=======
            <Route path='add-money' element={<AddMoney />} />
>>>>>>> a2b13d5 (first version addMoney)
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

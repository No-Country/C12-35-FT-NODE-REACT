<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRequire, RejectIsAuthenticated } from "@/layouts";
import { LoginForm, RegisterForm } from "@/modules";
import { Landing, Home } from "@/pages";
import { Main, MainContainer } from "./style";
=======
import React from "react"
import { Route, Routes } from "react-router-dom"

import { AuthRequire, RejectIsAuthenticated } from "@/layouts"
import { LoginForm } from "../../modules/Forms/Login"
import { FormRegister } from "../../modules/Forms/Register"
import { Home } from "@/pages"
import { Main, MainContainer } from "./style"
>>>>>>> bbb81a2c931ec6b01f1ee704808cd0a2d87a90e8

const AppRoutes = () => {
  return (
    <Main>
      <MainContainer>
        <Routes>
          {/* Public routes */}
<<<<<<< HEAD
          <Route path='/' element={<Landing />} />
          <Route path='/srv' element={<RegisterForm />} />
=======
          <Route path='/srv' element={< FormRegister />} />
>>>>>>> bbb81a2c931ec6b01f1ee704808cd0a2d87a90e8
          <Route path='/srv/login' element={<LoginForm />} />

          {/* Error routes */}
          <Route path='*' element={<div>ERROR PAGE</div>} />

          {/* Auth required routes */}
          <Route path='/home' element={<AuthRequire />}>
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
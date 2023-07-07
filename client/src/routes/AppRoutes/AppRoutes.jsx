import React from "react"
import { Route, Routes } from "react-router-dom"



import { RegisterForm } from '@/modules/RegisterForm'
import { LoginForm } from "@/modules/LoginForm"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/testregister' element={<RegisterForm/>} />
      <Route path="/testlogin" element={<LoginForm/>} />
      <Route path='*' element={<div>ERROR PAGE</div>} />
    </Routes>
  )
}

export default AppRoutes

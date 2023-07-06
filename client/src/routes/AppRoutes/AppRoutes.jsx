import React from "react"
import { Route, Routes } from "react-router-dom"



import { RegisterForm } from "@/pages/RegisterForm"
import { LoginForm } from "../../pages/LoginForm"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<RegisterForm/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path='*' element={<div>ERROR PAGE</div>} />
    </Routes>
  )
}

export default AppRoutes

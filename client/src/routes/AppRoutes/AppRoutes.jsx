import React from "react"
import { Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<div>HOME PAGE</div>} />
      <Route path='*' element={<div>ERROR PAGE</div>} />
    </Routes>
  )
}

export default AppRoutes

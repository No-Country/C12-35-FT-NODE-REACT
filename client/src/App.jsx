import { AppRoutes } from "@/routes"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { verifyUser } from "@@/queries/User"

function App() {
  //redux
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.auth)
  //effects
  useEffect(() => {
    dispatch(verifyUser(userData?.id))
  }, [])

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

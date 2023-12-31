import { AppRoutes } from "@/routes"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { verifyUser } from "@@/queries/User"
import Cookies from "js-cookie"

function App() {
  //redux
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.auth)
  const userId = Cookies.get("userId")
  //effects
  useEffect(() => {
    userId && dispatch(verifyUser())
  }, [userId])

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

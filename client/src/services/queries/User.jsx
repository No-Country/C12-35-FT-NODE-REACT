import { User } from "@@/config/endpoints"
import Cookies from "js-cookie"
import axios from "axios"
import { redirect } from "react-router-dom"

const { login, register } = User

//

const setCookiesAndRedirect = (accessTokenValue = "test1234") => {
  Cookies.set("accessToken", accessTokenValue, { expires: 1, path: "/" })
  window.location.reload()
  return redirect("/app")
}

export const registerUser = (values, setState) => {
  axios
    .post(register, values)
    .then((res) => {
      console.log(res)
      setState()
      setCookiesAndRedirect()
    })
    .catch((err) => {
      //eliminar al deployar el back
      setCookiesAndRedirect()
      console.log(err)
      setState(err.response.data.data)
    })
}

export const loginUser = (values, setState) => {
  axios
    .post(login, values)
    .then((res) => {
      console.log(res)
      setState()
      setCookiesAndRedirect()
    })
    .catch((err) => {
      //eliminar al deplyar el back
      setCookiesAndRedirect()
      console.log(err.response.data.error)
      setState(err.response.data.error)
    })
}

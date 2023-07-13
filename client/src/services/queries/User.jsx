import user from "@@/config/endpoints/User"
import axios from "axios"

const { login, register } = user

export const registerUser = (values , setState ) => {
  axios
    .post(register, values)
    .then((res) => {
      console.log(res)
      setState()
      console.log("registrado")

    })
    .catch((err) => {
      console.log(err)
      setState(err.response.data.data)
      console.log("no registrado")

    })
}

export const loginUser = (values , setState ) => {
  axios
    .post(login, values)
    .then((res) => {
      console.log(res)
      setState()
      console.log("logueado")

    })
    .catch((err) => {
      console.log(err.response.data.error)
      setState(err.response.data.error)
      console.log("error al loguearse")
    })
}

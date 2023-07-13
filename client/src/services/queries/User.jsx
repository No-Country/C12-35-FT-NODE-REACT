import user from "@@/config/endpoints/User"
import axios from "axios"

const { login, register } = user

export const registerUser = (values /* , setState */) => {
  axios
    .post(register, values)
    .then((res) => {
      console.log(res)
      console.log("registrado")
      //setState(res.data)
      //location.replace("/")
    })
    .catch((err) => {
      console.log(err)
      console.log("no registrado")
      //setError(true)
    })
}

export const loginUser = (values /* , setState */) => {
  axios
    .post(login, values)
    .then((res) => {
      console.log(res)
      console.log("logueado")
      //location.replace("/")
    })
    .catch((err) => {
      console.log(err.response)
      console.log("error al loguearse")
    })
}

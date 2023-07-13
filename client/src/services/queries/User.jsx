import user from "@@/config/endpoints/User"
import Cookies from "js-cookie"
import axios from "axios"
import { redirect } from "react-router-dom"

const { login, register } = user

//

const setCookiesAndRedirect = ()=>{
      Cookies.set('accessToken','test1234',{expires: 1, path: '/'})
      window.location.reload();
      return redirect('/app');
}


export const registerUser = (values , setState ) => {
  axios
    .post(register, values)
    .then((res) => {
      console.log(res)
      setState()
      setCookiesAndRedirect()
      

    })
    .catch((err) => {
      setCookiesAndRedirect()
      console.log(err)
      setState(err.response.data.data)
      

    })
}

export const loginUser = (values , setState ) => {
  axios
    .post(login, values)
    .then((res) => {
      console.log(res)
      setState()
      setCookiesAndRedirect()
    })
    .catch((err) => {
      setCookiesAndRedirect()
      console.log(err.response.data.error)
      setState(err.response.data.error)
    })
}

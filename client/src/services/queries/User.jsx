import Cookies from "js-cookie"
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { setAuth, setAuthUserId, logout } from "@/store/features/authSlice"
import { User } from "@@/config/endpoints"

const { login, register, verify } = User

export const setCookiesAndRedirect = createAsyncThunk(
  "set/cookies",
  ({ accessTokenValue, id }) => {
    console.log({ accessTokenValue, id })
    Cookies.set("accessToken", accessTokenValue, { expires: 1, path: "/" })
    Cookies.set("userId", id)
    return location.replace("/app/")
  }
)

export const registerUser = createAsyncThunk(
  "post/register",
  async (values, { dispatch }) => {
    try {
      const response = await axios.post(register, values)

      const data = await response.data

      dispatch(setCookiesAndRedirect())
      return data
    } catch (error) {
      dispatch(setCookiesAndRedirect())
      return error
    }
  }
)

export const loginUser = createAsyncThunk(
  "post/login",
  async (values, { dispatch }) => {
    try {
      const response = await axios.post(login, values)

      const data = await response.data
      console.log(data)
      dispatch(setAuthUserId(data))
      dispatch(
        setCookiesAndRedirect({
          accessTokenValue: data.token,
          id: data?.user?.id
        })
      )
      return data
    } catch (error) {
      dispatch(setCookiesAndRedirect())
      return error
    }
  }
)

//functions
export const logoutUser = (dispatcherData) => {
  Cookies.set("accessToken", "")
  Cookies.remove("accessToken")
  Cookies.remove("userId")
  dispatcherData
  window.location.replace("/")
}

export const verifyUser = createAsyncThunk(
  "get/accounts",
  async (_, { dispatch }) => {
    const accessToken = Cookies.get("accessToken")
    const id = Cookies.get("userId")
    try {
      const response = await axios.get(verify + id, {
        headers: {
          "access-token": accessToken
        }
      })

      const data = await response.data
      dispatch(setAuth(data))

      console.log({ dataVerify: data })

      return data
    } catch (error) {
      return error
    }
  }
)

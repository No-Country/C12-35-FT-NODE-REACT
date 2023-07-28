import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"
import { Transaction } from "@@/config/endpoints"

const { send, verify } = Transaction

//functions

export const sendMeMoney = createAsyncThunk(
  "post/transactions/add",
  async (values, { dispatch }) => {
    const accessToken = Cookies.get("accessToken")
    try {
      const response = await axios.post(create, values, {
        headers: {
          "access-token": accessToken
        }
      })
      const data = await response.data

      return data
    } catch (error) {
      return error
    }
  }
)

export const sendTransfer = createAsyncThunk(
  "post/transactions",
  async (values, { dispatch }) => {
    const accessToken = Cookies.get("accessToken")
    try {
      const response = await axios.post(send, values, {
        headers: {
          "access-token": accessToken
        }
      })
      const data = await response.data

      return data
    } catch (error) {
      return error
    }
  }
)

export const verifyUserAccount = createAsyncThunk(
  "post/transactions/verify",
  async (values, { dispatch }) => {
    try {
      const response = await axios.post(verify, values)
      const data = await response.data
      return data
    } catch (error) {
      return error.response
    }
  }
)

import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"
import { Transaction } from "@@/config/endpoints"
import { incrementFunds, decrementFunds } from "@/store/features/authSlice"

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
const { send, verify, create } = Transaction

//functions

export const addMoney = createAsyncThunk(
  "post/transactions",
<<<<<<< HEAD
=======
=======
const { create, send, verify, history } = Transaction

//functions

export const sendMeMoney = createAsyncThunk(
  "post/transactions/add",
>>>>>>> 61588d3 (trying to fix add money)
>>>>>>> main
  async (values, { dispatch }) => {
    const accessToken = Cookies.get("accessToken")
    try {
      const response = await axios.post(create, values, {
        headers: {
          "access-token": accessToken
        }
      })
      const data = await response.data
      dispatch(incrementFunds(values.amount))

      return data
    } catch (error) {
      return error
    }
  }
)

<<<<<<< HEAD
export const sendTransfer = createAsyncThunk(
  "post/transactions",
=======
<<<<<<< HEAD
export const sendTransfer = createAsyncThunk(
  "post/transactions",
=======
export const createTransaction = createAsyncThunk(
  "post/transactions/add",
>>>>>>> 61588d3 (trying to fix add money)
>>>>>>> main
  async (values, { dispatch }) => {
    const accessToken = Cookies.get("accessToken")
    try {
      const response = await axios.post(send, values, {
        headers: {
          "access-token": accessToken
        }
      })
      const data = await response.data
      dispatch(decrementFunds(values.amount))

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

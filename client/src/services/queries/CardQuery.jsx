import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"
import { Cards } from "@@/config/endpoints"

const { addCard } = Cards

//functions

export const AddCard = createAsyncThunk(
  "post/transactions",
  async (values, { dispatch }) => {
    console.log(values)
    const accessToken = Cookies.get("accessToken")
    try {
      const response = await axios.post(addCard, values, {
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

import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./features/authSlice"
import cardSlice from "./cardSlice/cardSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cards: cardSlice
  }
})
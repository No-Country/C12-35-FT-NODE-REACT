import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  username: ""
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth.push({
        username: action.payload.username
      })
    },
    updateAuth: (state, action) => {
      state.auth.push({
        ...state.auth,
        username: action.payload.username
      })
    }
  }
})

export default authSlice.reducer

export const { setAuth, updateAuth } = authSlice.actions

import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  auth: false,
  user: {
    id: 0,
    address: "",
    local_address: "",
    postal_code: "",
    phone_number: "",
    profile_picture: "",
    country: "",
    document_type: "",
    document_number: "",
    birthdate: "",
    verified: false,
    verified_phone: false,
    first_name: "",
    last_name: ""
  },
  cards: [],
  history: {
    id: 0
  },
  type: "",
  date_created: "",
  balance: 0,
  id: 0,
  email: "",
  password: ""
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      ;(state.user = {
        id: action.payload.data.id,
        address: action.payload.data.user.address,
        local_address: action.payload.data.user.local_address,
        postal_code: action.payload.data.user.postal_code,
        phone_number: action.payload.data.user.phone_number,
        profile_picture: action.payload.data.user.profile_picture,
        country: action.payload.data.user.country,
        document_type: action.payload.data.user.document_type,
        document_number: action.payload.data.user.document_number,
        birthdate: action.payload.data.user.birthdate,
        verified: action.payload.data.user.verified,
        verified_phone: action.payload.data.user.verified_phone,
        first_name: action.payload.data.user.first_name,
        last_name: action.payload.data.user.last_name
      }),
        (state.cards = action.payload.data.cards),
        (state.history = {
          id: action.payload.data.history.id
        }),
        (state.type = action.payload.data.type),
        (state.date_created = action.payload.data.date_created),
        (state.balance = action.payload.data.balance),
        (state.id = action.payload.data.id),
        (state.email = action.payload.data.email),
        (state.password = action.payload.data.password)
    },
    updateAuth: (state, action) => {
      // state.auth.push({
      //   auth: action.payload.auth,
      //   user: {
      //     ...state.user,
      //     id: action.payload.user.id,
      //     email: action.payload.user.email,
      //     first_name: action.payload.user.first_name,
      //     last_name: action.payload.user.last_name,
      //     address: action.payload.user.address,
      //     local_address: action.payload.user.local_address,
      //     postal_code: action.payload.user.postal_code,
      //     phone_number: action.payload.user.phone_number,
      //     profile_picture: action.payload.user.profile_picture,
      //     country: action.payload.user.country,
      //     document_type: action.payload.user.document_type,
      //     document_number: action.payload.user.document_number,
      //     birthdate: action.payload.user.birthdate,
      //     verified: action.payload.user.verified,
      //     verified_phone: action.payload.user.verified_phone
      //   }
      // })
    },
    setAuthUserId: (state, action) => {
      state.id = action.payload.user.id
    },  
    logout: (state) => {
      return initialState;
    },
  }
});

export default authSlice.reducer

export const { setAuth, updateAuth, setAuthUserId, logout } = authSlice.actions;
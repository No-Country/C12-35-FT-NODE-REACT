import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
<<<<<<< HEAD
<<<<<<< HEAD
  auth: false,
=======
>>>>>>> 14bff1a (transfer money into accounts)
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
  id: 0,
  email: "",
<<<<<<< HEAD
  password: ""
=======
  username: "",
>>>>>>> 5211a70 (added validations)
=======
  password: "",
  balance: 0,
  date_created: "",
  cvu: "",
  alias: "",
  valid: false,
  transactions: [],
  cards: []
>>>>>>> 14bff1a (transfer money into accounts)
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.data.user
      state.id = action.payload.id
      state.email = action.payload.data.email
      state.password = action.payload.data.password
      state.balance = action.payload.data.balance
      state.date_created = action.payload.data.date_created
      state.cvu = action.payload.data.cvu
      state.alias = action.payload.data.alias
      state.valid = action.payload.data.valid
      state.transactions = action.payload.data.transactions
      state.cards = action.payload.data.cards
    },
    updateAuth: (state, action) => {
<<<<<<< HEAD
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
<<<<<<< HEAD
    },  
    logout: (state) => {
      return initialState;
    },
=======
      state.auth.push({
        ...state.auth,
        username: action.payload.username
      })
    },
    
>>>>>>> 5211a70 (added validations)
=======
    },
    logout: () => {
      //placeholder porque borraron el logout del usuario
    },
    incrementFunds: (state, action) => {
      state.balance = state.balance + action.payload
    },
    decrementFunds: (state, action) => {
      state.balance = state.balance - action.payload
    }
>>>>>>> 1751b2b (minor fixes and changes)
  }
})

export default authSlice.reducer

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const { setAuth, updateAuth, setAuthUserId, logout } = authSlice.actions;
=======
export const { setAuth, updateAuth, setCards } = authSlice.actions
>>>>>>> 5211a70 (added validations)
=======
export const { setAuth, updateAuth, setAuthUserId, logout } = authSlice.actions;
>>>>>>> 1751b2b (minor fixes and changes)
=======
export const { setAuth, updateAuth, setAuthUserId, logout } = authSlice.actions
>>>>>>> 14bff1a (transfer money into accounts)
=======
export const {
  setAuth,
  updateAuth,
  setAuthUserId,
  logout,
  incrementFunds,
  decrementFunds
} = authSlice.actions
>>>>>>> c411a69 (implement add funs to account and refresh transfers and adds)

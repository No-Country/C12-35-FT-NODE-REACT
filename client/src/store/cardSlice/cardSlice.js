import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name:"cardSlice",
    initialState: {
        cards:[],
    },
    reducers: {
        setCards:(state,action) =>{
            state.cards = {...state.cards, ...action.payload}
        },
    }

})

export default cardSlice.reducer
export const {setCards} = cardSlice.actions

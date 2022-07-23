import { createSlice } from "@reduxjs/toolkit";

export const albumSlice=createSlice({
    name:"album",
    initialState:{
        album:[]
    },
    reducers:{
        getAlbum:(state,action)=>{
            state.album=action.payload
        }
    }
})

export const {getAlbum}=albumSlice.actions

export default albumSlice.reducer
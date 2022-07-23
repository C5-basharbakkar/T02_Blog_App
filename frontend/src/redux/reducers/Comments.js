import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice=createSlice({
    name:"comments",
    initialState:{
        comments:[]
    },
    reducers:{
        getComments:(state,action)=>{
            state.comments=action.payload
        }
    }
})

export const {getComments}=commentsSlice.actions

export default commentsSlice.reducer
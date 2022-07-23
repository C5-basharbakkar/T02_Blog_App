import { createSlice } from "@reduxjs/toolkit";

export const userSlice= createSlice({
    name:"users",
    initialState:{
        users:[]
    },
    reducers:{
        getUser:(state,action)=>{
            state.users=action.payload
        }
    }
})


export const {getUser}=userSlice.actions

export default userSlice.reducer
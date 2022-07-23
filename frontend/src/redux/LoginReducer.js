import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: localStorage.getItem("user") ? localStorage.getItem("user") : false,
  },
  reducers: {
    setLogin: (state, action) => {
        console.log(action.payload);
      state.login = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logOut: (state, action) => {
      state.login = false;
      localStorage.clear();
    },
  },
});

export const { setLogin, logOut } = loginSlice.actions;

export default loginSlice.reducer;

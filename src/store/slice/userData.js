import { createSlice } from "@reduxjs/toolkit";

const setUserData = createSlice({
  name: "userData",
  initialState: {
    userName: "Đăng nhập",
    email: "",
    isAuthUser: false,
    token: "",
  },
  reducers: {
    Login: (state, action) => {
      state.userName = action.payload.name;
      state.email = action.payload.email;

      state.isAuthUser = true;
    },
    Logout: (state, action) => {
      state.userName = "Đăng Nhập";
      state.isAuthUser = false;
    },

    changeUserData: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
    changeToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { Login, Logout, changeToken, changeUserData } =
  setUserData.actions;
export default setUserData.reducer;

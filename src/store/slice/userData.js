import { createSlice } from "@reduxjs/toolkit";

const setUserData = createSlice({
  name: "userData",
  initialState: {
    userName: "Đăng nhập",
    email: "",
    age: "",
    passWord: "",
    isAuthUser: false,
    card: [],
    token: "",
  },
  reducers: {
    Login: (state, action) => {
      state.userName = action.payload.name;
      state.email = action.payload.email;
      state.age = action.payload.age;
      state.passWord = action.payload.passWord;
      state.isAuthUser = true;
    },
    Logout: (state, action) => {
      state.userName = "Đăng Nhập";
      state.isAuthUser = false;
      state.card = [];
    },
    changeCardData: (state, action) => {
      state.card.push(action.payload);
    },
    changeUserData: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.age = action.payload.age;
    },
    changeToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { Login, Logout, changeToken, changeCardData, changeUserData } =
  setUserData.actions;
export default setUserData.reducer;

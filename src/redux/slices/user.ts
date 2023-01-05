import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: number;
  username: string;
  email: string;
  roles: string[];
  isAuth: boolean;
};

export interface userState {
  user: User;
}

const initialState: userState = {
  user: {
    id: 0,
    username: "",
    email: "",
    roles: [],
    isAuth:false
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action) => {
      state.user.isAuth = action.payload
    }
  },
});

export const { saveUser, setIsAuth } = userSlice.actions;

export default userSlice.reducer;

import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/userType";

export interface userState {
  user: User;
}

const initialState: userState = {
  user: {
    id: 0,
    username: "",
    email: "",
    roles: [],
    isAuth: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.user.isAuth = action.payload;
    },
    logoutUser: () => {},
  },
});

export const { saveUser, setIsAuth, logoutUser } = userSlice.actions;

export default userSlice.reducer;

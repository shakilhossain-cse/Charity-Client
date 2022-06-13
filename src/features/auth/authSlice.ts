import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface AuthState {
  token: string | null;
  user: {
    name: string;
    avatar: string;
    email: string;
  } | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {

      state.token = action.payload.token;
      state.user = action.payload.user;

      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: action.payload.token,
          user: action.payload.user,
        })
      );
    },
  },
});

export const { login } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;

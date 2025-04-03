/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state for the auth slice
interface AuthState {
  isAuthenticated: boolean; // Whether the user is logged in
  token: string | null; // Authentication token (JWT or similar)
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    roll: "SUPER_ADMIN";
  } | null; // User details
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

// Create the auth slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to log in the user
    login: (state, action: PayloadAction<{ token: string; user: any }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    // Action to log out the user
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
    // Optional: Update user details
    updateUser: (state, action: PayloadAction<any>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

// Export actions
export const { login, logout, updateUser } = authSlice.actions;

// Export reducer
export default authSlice.reducer;

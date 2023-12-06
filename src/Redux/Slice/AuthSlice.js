// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      successMessage: '',
      error: null,
      mobileNumber: "",
      isValidMobileNumber: true,
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
      setSuccessMessage: (state, action) => {
        state.successMessage = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      clearErrors: (state) => {
        state.error = null;
      },
      clearState: (state) => {
        state.user = null;
        state.successMessage = '';
        state.error = null;
      },
      setMobileNumber: (state, action) => {
        state.mobileNumber = action.payload;
        state.isValidMobileNumber = action.payload.length === 10;
      },
    },
  });

export const {
    setUser,
    setSuccessMessage,
    setError,
    clearErrors,
    clearState,
    setMobileNumber
  } =
  AuthSlice.actions;
export const selectAuth = (state) => state.auth;
export default AuthSlice.reducer;

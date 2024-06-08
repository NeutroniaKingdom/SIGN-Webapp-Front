import { createSlice } from '@reduxjs/toolkit'

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        account: null,
        token: null,
        isAuthenticating: false,
    },
    reducers: {
        authenticate: (state, action) => {
            state.account = action.payload.account;
            state.isAuthenticating = true;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.account = null;
            state.isAuthenticating = false;
            state.token = null;
        }
    }
})

export const { authenticate, logout } = accountSlice.actions;

export default accountSlice.reducer;
/*
// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
*/
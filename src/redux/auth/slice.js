import { createSlice } from '@reduxjs/toolkit';
import {
  refreshThunk,
  loginThunk,
  logoutThunk,
  registrstionThunk,
} from './thunks';
import { handleAuth, handleLogout, handleRefresh } from './helpers';

const initialState = {
  token: '',
  user: null,
};

export const authSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrstionThunk.fulfilled, handleAuth)
      .addCase(loginThunk.fulfilled, handleAuth)
      .addCase(refreshThunk.fulfilled, handleRefresh)
      .addCase(logoutThunk.fulfilled, handleLogout);
  },
});

export const authReducer = authSlice.reducer;

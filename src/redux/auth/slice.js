import { createSlice } from '@reduxjs/toolkit';
import {
  refreshThunk,
  loginThunk,
  logoutThunk,
  registrationThunk,
} from './thunks';
import { handleAuth, handleLogout, handleRefreshFul, handleRefreshRej } from './helpers';

const initialState = {
  token: '',
  user: null,
  isRefreshing: true,
};

export const authSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuth)
      .addCase(loginThunk.fulfilled, handleAuth)
      .addCase(refreshThunk.fulfilled, handleRefreshFul)
      .addCase(refreshThunk.rejected, handleRefreshRej)
      .addCase(logoutThunk.fulfilled, handleLogout);
  },
});

export const authReducer = authSlice.reducer;
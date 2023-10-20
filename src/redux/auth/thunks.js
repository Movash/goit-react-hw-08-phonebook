import { createAsyncThunk } from '@reduxjs/toolkit';
import { refresh, logOut, setToken, signIn, signUp } from 'api/auth';

export const registrstionThunk = createAsyncThunk('auth/registration', async (body, {rejectWithValue}) => {
  try {
    const data = await signUp(body);
    return data
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshThunk = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) return thunkAPI.rejectWithValue('Token is missing');
  setToken(token);

  try {
    const data = await refresh();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logOut()
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

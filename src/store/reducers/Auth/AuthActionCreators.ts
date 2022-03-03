import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserLogin, IUserResponse } from '../../../models/IUser';

const baseUrl = 'http://localhost:3002/auth';

export const login = createAsyncThunk(
  'auth/login',
  async (user: IUserLogin, thunkApi) => {
    try {
      const res = await axios.post<IUserResponse>(`${baseUrl}/login`, {
        data: user,
      });
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue('Что-то пошло не так');
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const res = await axios.post<IUserResponse>(`${baseUrl}/logout`);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue('Что-то пошло не так');
  }
});

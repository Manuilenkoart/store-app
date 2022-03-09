import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserResponse } from '../../../models/IUser';
import { login, logout, register } from './AuthActionCreators';

export interface AuthState {
  user: IUser | null;
  token: string | null;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: '',
};

const setError = (state: AuthState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state: AuthState) => {
      state.isLoading = true;
    },
    [login.fulfilled.type]: (
      state: AuthState,
      action: PayloadAction<IUserResponse>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.error = '';
    },
    [login.rejected.type]: setError,

    //  logout
    [logout.pending.type]: (state: AuthState) => {
      state.isLoading = true;
    },
    [logout.fulfilled.type]: (state: AuthState) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.error = '';
    },

    // register
    [register.pending.type]: (state: AuthState) => {
      state.isLoading = true;
    },
    [register.fulfilled.type]: (
      state: AuthState,
      action: PayloadAction<IUserResponse>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.error = '';
    },
    [register.rejected.type]: setError,
  },
});

export default authSlice.reducer;

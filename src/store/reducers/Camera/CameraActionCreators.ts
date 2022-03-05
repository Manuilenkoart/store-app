import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICamera } from '../../../models/ICamera';
import { AuthState } from '../Auth/AuthSlice';

// redux toolkit
const baseUrl = 'http://localhost:3002/camera';
export const getCamerasFetch = createAsyncThunk(
  'cameras/getAll',
  async (_, thunkApi) => {
    try {
      const res = await axios.get<ICamera[]>(`${baseUrl}`);
      return res.data;
    } catch (e) {
      return thunkApi.rejectWithValue('Что-то пошло не так');
    }
  },
);

export const addCameraFetch = createAsyncThunk(
  'cameras/addCamera',
  async (newCamera: ICamera, thunkApi) => {
    const {
      authState: { token },
    } = thunkApi.getState() as { authState: AuthState };

    const headers = {
      authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.post<ICamera>(
        `${baseUrl}`,
        {
          data: newCamera,
        },
        { headers },
      );
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue('Что-то пошло не так');
    }
  },
);

export const deleteCameraFetch = createAsyncThunk(
  'cameras/delete',
  async (camera: ICamera, thunkApi) => {
    try {
      const res = await axios.delete<ICamera>(`${baseUrl}`, {
        data: { _id: camera._id },
      });
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue('Что-то пошло не так');
    }
  },
);

export const updateCameraFetch = createAsyncThunk(
  'cameras/update',
  async (updateCamera: ICamera, thunkApi) => {
    const {
      authState: { token },
    } = thunkApi.getState() as { authState: AuthState };

    const headers = {
      authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.put<ICamera>(
        `${baseUrl}`,
        {
          data: updateCamera,
        },
        { headers },
      );
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue('Что-то пошло не так');
    }
  },
);

export const getCameraDetailsFetch = createAsyncThunk(
  'cameras/getCameraDetails',
  async (cameraId: string, thunkApi) => {
    try {
      const res = await axios.get<ICamera>(`${baseUrl}/${cameraId}`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue('Что-то пошло не так');
    }
  },
);

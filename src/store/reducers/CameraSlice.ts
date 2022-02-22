import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICamera } from '../../models/ICamera';
import {
  getCamerasFetch,
  addCameraFetch,
  deleteCameraFetch,
  updateCameraFetch,
  getCameraDetailsFetch,
} from './CameraActionCreators';

export interface CamerasState {
  cameras: ICamera[];
  cameraDetails: ICamera | null;
  isLoading: boolean;
  error: string;
}

const initialState: CamerasState = {
  cameras: [],
  cameraDetails: null,
  isLoading: false,
  error: '',
};

const setError = (state: CamerasState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};

// redux toolkit
export const camerasSlice = createSlice({
  name: 'cameras',
  initialState,
  reducers: {},
  extraReducers: {
    // get
    [getCamerasFetch.pending.type]: (state: CamerasState) => {
      state.isLoading = true;
    },
    [getCamerasFetch.fulfilled.type]: (
      state: CamerasState,
      action: PayloadAction<ICamera[]>,
    ) => {
      state.cameras = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [getCamerasFetch.rejected.type]: setError,
    // add
    [addCameraFetch.pending.type]: (state: CamerasState) => {
      state.isLoading = true;
    },
    [addCameraFetch.fulfilled.type]: (
      state: CamerasState,
      action: PayloadAction<ICamera>,
    ) => {
      state.cameras.push(action.payload);
      state.isLoading = true;
    },
    [addCameraFetch.rejected.type]: setError,
    // delete
    [deleteCameraFetch.pending.type]: (state: CamerasState) => {
      state.isLoading = true;
    },
    [deleteCameraFetch.fulfilled.type]: (
      state: CamerasState,
      action: PayloadAction<ICamera>,
    ) => {
      state.cameras = state.cameras.filter(
        camera => camera._id !== action.payload._id,
      );
      state.isLoading = false;
      state.error = '';
    },
    [deleteCameraFetch.rejected.type]: setError,
    // update
    [updateCameraFetch.pending.type]: (state: CamerasState) => {
      state.isLoading = true;
    },
    [updateCameraFetch.fulfilled.type]: (
      state: CamerasState,
      action: PayloadAction<ICamera>,
    ) => {
      state.cameras = state.cameras.map(camera =>
        camera._id === action.payload._id ? action.payload : camera,
      );
      state.isLoading = false;
      state.error = '';
    },
    [updateCameraFetch.rejected.type]: setError,

    // cameraDetails

    [getCameraDetailsFetch.pending.type]: (state: CamerasState) => {
      state.isLoading = true;
    },
    [getCameraDetailsFetch.fulfilled.type]: (
      state: CamerasState,
      action: PayloadAction<ICamera>,
    ) => {
      state.cameraDetails = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [getCameraDetailsFetch.rejected.type]: setError,
  },
});

export default camerasSlice.reducer;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import camerasReducer from './reducers/CameraSlice';

// объединение всех reducers
const rootReducer = combineReducers({
  camerasState: camerasReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

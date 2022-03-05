import { configureStore } from '@reduxjs/toolkit';
import { filmApi } from '../services/FilmService';
import camerasReducer from './reducers/Camera/CameraSlice';
import shoppingCartReducer from './reducers/ShoppingCartSlice';
import authReducer from './reducers/Auth/AuthSlice';

export const rootReducer = configureStore({
  // объединение всех reducers
  reducer: {
    authState: authReducer,
    camerasState: camerasReducer,
    shoppingCartState: shoppingCartReducer,
    [filmApi.reducerPath]: filmApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(filmApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer.getState>;
export type AppDispatch = typeof rootReducer.dispatch;

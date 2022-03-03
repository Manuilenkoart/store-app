import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filmApi } from '../services/FilmService';
import camerasReducer from './reducers/CameraSlice';
import shoppingCartReducer from './reducers/ShoppingCartSlice';
import authReducer from './reducers/Auth/AuthSlice';

// объединение всех reducers
const rootReducer = combineReducers({
  camerasState: camerasReducer,
  shoppingCartState: shoppingCartReducer,
  [filmApi.reducerPath]: filmApi.reducer, // RTK query
  authState: authReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(filmApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

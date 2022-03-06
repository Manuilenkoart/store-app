import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filmApi } from '../services/FilmService';
import camerasReducer from './reducers/Camera/CameraSlice';
import shoppingCartReducer from './reducers/ShoppingCartSlice';
import authReducer from './reducers/Auth/AuthSlice';

// объединение всех reducers
const rootReducer = combineReducers({
  authState: authReducer,
  camerasState: camerasReducer,
  shoppingCartState: shoppingCartReducer,
  [filmApi.reducerPath]: filmApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authState'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      concat: [filmApi.middleware],
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

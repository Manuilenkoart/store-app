import { combineReducers, configureStore } from '@reduxjs/toolkit';
import camerasReducer from './reducers/CameraSlice';
import shoppingCartReducer from './reducers/ShoppingCartSlice';

// объединение всех reducers
const rootReducer = combineReducers({
  camerasState: camerasReducer,
  shoppingCartState: shoppingCartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

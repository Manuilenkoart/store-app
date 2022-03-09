import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICamera } from '../../models/ICamera';
import { IFilm } from '../../models/IFilm';

interface ShoppingCartState {
  cameras: ICamera[];
  films: IFilm[];
}

const initialState: ShoppingCartState = {
  cameras: [],
  films: [],
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addCameraToShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<ICamera>,
    ) => {
      state.cameras.push(action.payload);
    },
    deleteCameraFromShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<ICamera>,
    ) => {
      state.cameras = state.cameras.filter(
        camera => camera._id !== action.payload._id,
      );
    },
    deleteFilmFromShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<IFilm>,
    ) => {
      state.films = state.films.filter(film => film._id !== action.payload._id);
    },
    addFilmToShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<IFilm>,
    ) => {
      state.films.push(action.payload);
    },
  },
});
export default shoppingCartSlice.reducer;
export const {
  addCameraToShoppingCart,
  deleteCameraFromShoppingCart,
  deleteFilmFromShoppingCart,
  addFilmToShoppingCart,
} = shoppingCartSlice.actions;

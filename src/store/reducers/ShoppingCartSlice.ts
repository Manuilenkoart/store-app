import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICamera } from '../../models/ICamera';

interface ShoppingCartState {
  cameras: ICamera[];
}

const initialState: ShoppingCartState = {
  cameras: [],
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
  },
});
export default shoppingCartSlice.reducer;
export const {
  addCameraToShoppingCart,
  deleteCameraFromShoppingCart,
} = shoppingCartSlice.actions;

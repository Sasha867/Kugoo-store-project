import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardScooter } from "../../components/constans/interfaces";

export interface CartObject {
  count: number;
  product: CardScooter;
}

export interface CartProductsState {
  cart: CartObject[];
}

const initialState: CartProductsState = {
  cart: [],
};

export const CartProductSlice = createSlice({
  name: "CartProductsState",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CardScooter>) => {
      state.cart = [...state.cart, { product: action.payload, count: 1 }];
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((el) => el.product.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = CartProductSlice.actions;
export default CartProductSlice.reducer;

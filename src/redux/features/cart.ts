import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardScooter } from "../../components/constans/interfaces";

export interface CartObject {
  count: number;
  product: CardScooter;
}

export interface CartProductsState {
  cart: CartObject[];
}

const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState: CartProductsState = {
  cart: cartLocalStorage,
};

export const CartProductSlice = createSlice({
  name: "CartProductsState",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CardScooter>) => {
      let isProductFound = false;
      state.cart = state.cart.map((el) => {
        if (el.product.id === action.payload.id) {
          el.count += 1;
          isProductFound = true;
        }
        return el;
      });
      if (!isProductFound) {
        state.cart = [...state.cart, { product: action.payload, count: 1 }];
      }
      console.log(state.cart);
      console.log(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((el) => el.product.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseAmount: (state, action: PayloadAction<CardScooter>) => {
      const foundElement = state.cart.find(
        (el) => el.product.id === action.payload.id
      );
      if (foundElement && foundElement.count <= 1) {
        state.cart = state.cart.filter(
          (el) => el.product.id !== action.payload.id
        );
      }
      state.cart = state.cart.map((el) => {
        if (el.product.id === action.payload.id) {
          el.count -= 1;
        }
        return el;
      });
    },
    resetCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", "[]");
    },
  },
});

export const { addProduct, deleteProduct, decreaseAmount, resetCart } =
  CartProductSlice.actions;
export default CartProductSlice.reducer;

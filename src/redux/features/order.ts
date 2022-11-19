import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartObject } from "./cart";

export interface OrderObject {
  itemNumber: number;
  product: CartObject;
}

export interface OrderState {
  order: OrderObject[];
}

const initialState: OrderState = {
  order: [],
};

export const OrderProductSlice = createSlice({
  name: "OrderProductState",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<OrderObject[]>) => {
      state.order = action.payload;
      console.log(action.payload);
      
    },
  },
});

// export const CartProductSlice = createSlice({
//     name: "CartProductsState",
//     initialState,
//     reducers: {
//       addProduct: (state, action: PayloadAction<CardScooter>) => {
//         state.cart = [...state.cart, { product: action.payload, count: 1 }];
//       },
//       deleteProduct: (state, action: PayloadAction<string>) => {
//         state.cart = state.cart.filter((el) => el.product.id !== action.payload);
//       },
//     },
//   });

//   export const { addProduct, deleteProduct } = CartProductSlice.actions;
//   export default CartProductSlice.reducer;

// export async function scootersRefAdd(): Promise<void> {
//     await addDoc(collection(db, "products"), cardScooter);
// await setDoc(doc(db, "products", "cardScooter"), cardScooter);   ///////
//   }
// console.log(scootersRefAdd());

export const {addOrder} = OrderProductSlice.actions;
export default OrderProductSlice.reducer;
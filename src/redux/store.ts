import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import visibleStateReducer from "./features/visibleSlice";
import userStateReducer from "./features/user";
import { useDispatch } from "react-redux";
import cardsScootersStateReducer from "./features/cardScooter";
import userProductStateReducer from "./features/userProduct";
import cartProductStateReducer from "./features/cart";

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export const store = configureStore({
  reducer: {
    visibleState: visibleStateReducer,
    userState: userStateReducer,
    cardsScootersState: cardsScootersStateReducer,
    userProductState: userProductStateReducer,
    cartProductState: cartProductStateReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

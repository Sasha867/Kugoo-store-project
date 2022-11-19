import { get } from "https";
import { RootState } from "../store";

export const isOpenRequestCall = (state: RootState) =>
  state.visibleState.isOpenRequestCall;

export const isOpenModal = (state: RootState) => state.visibleState.isOpenModal;

export const isOpenAcaunt = (state: RootState) =>
  state.visibleState.isOpenAcaunt;

export const getUser = (state: RootState) => state.userState.user;

export const getError = (state: RootState) => state.userState.error;

export const getCardsCollection = (state: RootState) =>
  state.cardsScootersState.cardsScooterCollection;

export const getUserProduct = (state: RootState) =>
  state.userProductState.userProduct;

export const getProduct = (state: RootState) => state.cartProductState.cart;

export const getTotalCartPrice = (state: RootState): number => {
  let totalPrice = 0;
  state.cartProductState.cart.forEach((el) => {
    totalPrice +=
      (+el.product.stockPrice ? +el.product.stockPrice : +el.product.price) *
      el.count;
  });

  return totalPrice;
};

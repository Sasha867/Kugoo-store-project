import { cardScooter } from "../components/constans/constans";

export const storeCardsGoods = () => {
  localStorage.setItem(cardScooter.title, JSON.stringify(cardScooter));
};

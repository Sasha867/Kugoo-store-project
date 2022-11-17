import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { CardScooter } from "../../components/constans/interfaces";
import { db } from "../../firebase/firebase";

export interface CardsGoods {
  cardsScooterCollection: CardScooter[] | null;
}

const initialState: CardsGoods = {
  cardsScooterCollection: null,
};

export const getCardsGoods = createAsyncThunk<any, any>(
  "cards/get",
  async () => {
    const arrayCardsScooter: object[] = [];
    const resData = await getDocs(collection(db, "products"));
    resData.forEach((el) => {
      arrayCardsScooter.push({ ...el.data(), id: el.id });
    });
    console.log(arrayCardsScooter);

    return arrayCardsScooter;
  }
);

export const CardsScootersSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCardsGoods.fulfilled, (state, action) => {
      state.cardsScooterCollection = action.payload;
    });
  },
});

export default CardsScootersSlice.reducer;

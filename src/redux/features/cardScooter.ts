import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { CardScooter } from "../../components/constans/interfaces";
import { db } from "../../firebase/firebase";

export interface CardsGoods {
  cardsScooterCollection: CardScooter[] | null;
}

const initialState: CardsGoods = {
  cardsScooterCollection: [],
};

export const getCardsGoods = createAsyncThunk<any, any>(
  "cards/get",
  async () => {
    const arrayCardsScooter: object[] = [];
    const resData = await getDocs(collection(db, "products"));
    resData.forEach((el) => {
      arrayCardsScooter.push({ ...el.data(), id: el.id });
    });
    return arrayCardsScooter;
  }
);

export const CardsScootersSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCardsGoods.fulfilled,
      (state, action: PayloadAction<CardScooter[]>) => {
        state.cardsScooterCollection = action.payload;
      }
    );
  },
});

export default CardsScootersSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { CardScooter } from "../../components/constans/interfaces";
import { db } from "../../firebase/firebase";

export interface UserProduct {
  userProduct: CardScooter | null;
}

const initialState: UserProduct = {
  userProduct: null,
};

export const getProductUser = createAsyncThunk<any, any>(
  "product/get",
  async (id): Promise<object | undefined> => {
    const docRef = doc(db, "products/", `${id}`);
    const docSnap = await getDoc(docRef);
    const userProduct = { ...docSnap.data(), id: id };
    console.log(userProduct);
    return userProduct;
  }
);

export const UserProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductUser.fulfilled, (state, action) => {
      state.userProduct = action.payload;
    });
  },
});

export default UserProductSlice.reducer;

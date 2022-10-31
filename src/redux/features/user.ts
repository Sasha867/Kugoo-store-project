import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { SerializedError } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase";

export interface User {
  loading: "idle" | "pending" | "succeeded" | "failed";
  user: UserCredential["user"] | null;
  error: SerializedError | null;
}

const initialState: User = {
  loading: "idle",
  user: null,
  error: null,
};

export interface Credentials {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk<any, Credentials>(
  "users/register",
  async (data: Credentials, { dispatch, getState }) => {
    const resData = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    return resData;
  }
);

export const signInUser = createAsyncThunk<any, Credentials>(
  "users/signIn",
  async (data: Credentials, { dispatch, getState }) => {
    const resData = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log(resData);
    
    
    return resData;
  }
);

export const signOutUser = createAsyncThunk<any, any>(
  "users/signOut",
  async (_: any, { rejectWithValue, fulfillWithValue }) => {
    return await signOut(auth);
  }
);

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.error;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.error;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { clearError } = UserSlice.actions;

export default UserSlice.reducer;

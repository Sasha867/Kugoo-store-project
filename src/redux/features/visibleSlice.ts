import { createSlice } from "@reduxjs/toolkit";

export interface VisibleState {
  isOpenRequestCall: boolean;
  isOpenModal: boolean;
  isOpenAcaunt: boolean;
}

const initialState: VisibleState = {
  isOpenRequestCall: false,
  isOpenModal: false,
  isOpenAcaunt: false,
};

export const visibleStateSlice = createSlice({
  name: "visibleState",
  initialState,
  reducers: {
    openRequestCall: (state) => {
      state.isOpenRequestCall = true;
    },
    openAcaunt: (state) => {
      state.isOpenAcaunt = true;
    },
    openModal: (state) => {
      state.isOpenModal = true;
    },
    closeAcaunt: (state) => {
      state.isOpenAcaunt = false;
    },
    closeRequestCall: (state) => {
      state.isOpenRequestCall = false;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openRequestCall,
  closeRequestCall,
  openModal,
  closeModal,
  openAcaunt,
  closeAcaunt,
} = visibleStateSlice.actions;

export default visibleStateSlice.reducer;

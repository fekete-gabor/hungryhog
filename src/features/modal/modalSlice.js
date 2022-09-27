import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    isModalOpen: (state) => {
      state.isModal = true;
    },
    isModalClose: (state) => {
      state.isModal = false;
    },
  },
});

export const { isModalOpen, isModalClose } = modalSlice.actions;
export default modalSlice.reducer;

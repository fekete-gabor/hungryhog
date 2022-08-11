import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    isVisible: (state) => {
      state.isActive = true;
    },
  },
});

export const { isVisible } = heroSlice.actions;
export default heroSlice.reducer;

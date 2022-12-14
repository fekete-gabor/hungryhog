import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isActive: false,
  slides: [],
};

const url = process.env.REACT_APP_HERO_SLIDES;

export const getSlides = createAsyncThunk(
  "hero/getSlides",
  async (_, thunkAPI) => {
    try {
      const response = await axios(url);
      const data = await response.data;
      return data;
    } catch (error) {
      if (error.response.status === 401) window.location.reload();
      return thunkAPI.rejectWithValue(`${error.message}`);
    }
  }
);

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    isVisible: (state) => {
      state.isActive = true;
    },
  },
  extraReducers: {
    [getSlides.pending]: (state) => {
      state.isLoading = true;
    },
    [getSlides.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.slides = action.payload.data[0].attributes.img.data;
    },
    [getSlides.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { isVisible } = heroSlice.actions;
export default heroSlice.reducer;

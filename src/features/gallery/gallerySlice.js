import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  images: [],
  current_image: [],
  current_index: "",
};

const url = process.env.REACT_APP_GALLERY_IMAGES;

export const getGalleryImages = createAsyncThunk(
  "gallery/getGalleryImages",
  async (_, thunkAPI) => {
    try {
      const response = await axios(url);
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error.message}`);
    }
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    changeCurrentItem: (state, action) => {
      const index = action.payload;
      const image = state.images.find((_, i) => i === index);
      state.current_image = image;
      state.current_index = index;
    },

    prevItem: (state) => {
      const index =
        state.current_index <= 0
          ? state.images.length - 1
          : state.current_index - 1;

      const image = state.images.find((_, i) => i === index);

      state.current_image = image;
      state.current_index = index;
    },
    nextItem: (state) => {
      const index =
        state.current_index >= state.images.length - 1
          ? (state.current_index = 0)
          : state.current_index + 1;

      const image = state.images.find((_, i) => i === index);

      state.current_image = image;
      state.current_index = index;
    },
  },
  extraReducers: {
    [getGalleryImages.pending]: (state) => {
      state.isLoading = true;
    },
    [getGalleryImages.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.images = action.payload.data[0].attributes.img.data;
    },
    [getGalleryImages.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { changeCurrentItem, prevItem, nextItem } = gallerySlice.actions;
export default gallerySlice.reducer;

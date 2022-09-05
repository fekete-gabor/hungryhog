import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: "false",
  menuSlides: [],
  menuItems: [],
  index: 0,
};

const url = process.env.REACT_APP_MENU_ITEMS;

export const getMenuItems = createAsyncThunk(
  "menu/getMenuItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios(url);
      const data = await response.data.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error.message}`);
    }
  }
);

export const getMenuSlides = createAsyncThunk(
  "menu/getMenuSlides",
  async (_, thunkAPI) => {
    try {
      const response = await axios(
        "https://hungryhog.up.railway.app/api/menu-slides?populate=*"
      );
      const data = await response.data.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error.message}`);
    }
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setIndex: (state, action) => {
      return { ...state, index: action.payload };
    },
  },
  extraReducers: {
    //FETCH ITEMS
    [getMenuItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getMenuItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.menuItems = action.payload;
    },
    [getMenuItems.rejected]: (state) => {
      state.isLoading = false;
    },

    // FETCH SLIDES
    [getMenuSlides.pending]: (state) => {
      state.isLoading = true;
    },
    [getMenuSlides.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.menuSlides = action.payload;
    },
    [getMenuSlides.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setIndex } = menuSlice.actions;
export default menuSlice.reducer;

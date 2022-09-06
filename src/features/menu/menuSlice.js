import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: "false",
  menuSlides: [],
  menuItems: [],
  filteredMenuItems: [],
  index: 0,
};

const menuItemsURL = process.env.REACT_APP_MENU_ITEMS;
const menuSlidessURL = process.env.REACT_APP_MENU_SLIDES;

export const getMenuItems = createAsyncThunk(
  "menu/getMenuItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios(menuItemsURL);
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
      const response = await axios(menuSlidessURL);
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
      state.index = action.payload;
    },
    filterMenuItems: (state, action) => {
      let tempArray;
      const btn = action.payload;

      if (btn === "összes") {
        tempArray = state.menuItems;
      } else {
        tempArray = state.menuItems.filter(
          (item) => item.attributes.type === btn
        );
      }
      state.filteredMenuItems = tempArray;
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
      state.filteredMenuItems = action.payload;
    },
    [getMenuItems.rejected]: (state) => {
      state.isLoading = false;
    },

    // FETCH SLIDES
    [getMenuSlides.pending]: (state) => {
      state.isLoading = true;
    },
    [getMenuSlides.fulfilled]: (state, action) => {
      const temp = action.payload.find((item) => {
        if (item.attributes.type === "összes") return item;
        return null;
      });

      const tempArray = action.payload.filter((item) => {
        if (temp) return item.attributes.type !== "összes";
        return item;
      });

      if (temp) tempArray.unshift(temp);

      state.isLoading = false;
      state.menuSlides = tempArray;
    },
    [getMenuSlides.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setIndex, filterMenuItems } = menuSlice.actions;
export default menuSlice.reducer;

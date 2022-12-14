import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: "false",
  menuItems: [],
  menuSlides: [],
  mainSlide: [],
  filteredMenuItems: [],
  menuBtnIndex: 0,
  viewStyle: "list",
  currentIngredient: [],
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
    setMenuBtnIndex: (state, action) => {
      state.menuBtnIndex = action.payload;
    },
    filterMenuItems: (state, action) => {
      let tempArray;
      const btn = action.payload;
      console.log(btn);
      if (btn === "összes" || btn === undefined) {
        tempArray = state.menuItems;
      } else {
        tempArray = state.menuItems.filter(
          (item) => item.attributes.type === btn
        );
      }
      state.filteredMenuItems = tempArray;
    },
    filterByIngredient: (state, action) => {
      let tempArray;
      const ingredient = action.payload;

      tempArray = state.menuItems
        .reduce((foods, ingredient) => {
          if (ingredient.attributes.ingredients.length > 0) {
            foods.push(ingredient);
          }
          return foods;
        }, [])
        .filter((food) => {
          const temp = food.attributes.ingredients.find((item) => {
            if (item.ingredients === ingredient) {
              return item;
            } else {
              return null;
            }
          });

          return temp;
        });
      state.filteredMenuItems = tempArray;
    },
    changeMainSlide: (state, action) => {
      const temp = state.menuSlides.find(
        (item) => action.payload === item.attributes.type
      );

      state.mainSlide = temp;
    },
    changeViewStyle: (state, action) => {
      const style = action.payload;

      state.viewStyle = style;
    },
    changeCurrentIngredient: (state, action) => {
      const ingredient = action.payload;
      state.currentIngredient = ingredient;
    },
    clearCurrentIngredient: (state) => {
      state.currentIngredient = [];
      state.filteredMenuItems = state.menuItems;
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

      let tempArray = action.payload
        .filter((item) => {
          if (temp) return item.attributes.type !== "összes";
          return item;
        })
        .sort((a, b) => a.attributes.type.localeCompare(b.attributes.type));

      if (temp) tempArray.unshift(temp);

      state.isLoading = false;
      state.menuSlides = tempArray;
      state.mainSlide = temp;
    },
    [getMenuSlides.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  setMenuBtnIndex,
  filterMenuItems,
  filterByIngredient,
  changeMainSlide,
  changeViewStyle,
  changeCurrentIngredient,
  clearCurrentIngredient,
} = menuSlice.actions;
export default menuSlice.reducer;

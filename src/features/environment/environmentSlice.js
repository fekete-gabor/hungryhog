import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  articles: [],
};
const url = "http://localhost:1337/api/environments?populate=*";

export const getArticles = createAsyncThunk(
  "environment/getArticles",
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

const environmentSlice = createSlice({
  name: "environment",
  initialState,
  extraReducers: {
    [getArticles.pending]: (state) => {
      state.isLoading = true;
    },
    [getArticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    [getArticles.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default environmentSlice.reducer;

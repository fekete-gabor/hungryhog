import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  contacts: [],
  openingHours: [],
};

const url = "http://localhost:1337/api/contacts?populate=*";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
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

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [getContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, action) => {
      const { nyitvatartas } = action.payload[0].attributes;
      state.isLoading = false;
      state.contacts = action.payload;
      state.openingHours = nyitvatartas;
    },
    [getContacts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;

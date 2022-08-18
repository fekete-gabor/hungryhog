import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  allContacts: [],
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
      state.isLoading = false;

      const tempHours = action.payload.find(
        (item) => item.attributes.title === "nyitvatartás"
      );

      const tempContacts = action.payload.find(
        (item) => item.attributes.title === "elérhetőségek"
      );

      state.allContacts = action.payload;
      state.contacts = tempContacts;
      state.openingHours = tempHours;
    },
    [getContacts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebar: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarOpen: (state) => {
      state.isSidebar = true;
    },
    sidebarClose: (state) => {
      state.isSidebar = false;
    },
  },
});

export const { sidebarOpen, sidebarClose } = sidebarSlice.actions;
export default sidebarSlice.reducer;

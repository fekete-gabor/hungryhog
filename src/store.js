import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import heroReducer from "./features/hero/heroSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    sidebar: sidebarReducer,
  },
});

export default store;

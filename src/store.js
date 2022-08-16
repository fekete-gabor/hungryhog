import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import heroReducer from "./features/hero/heroSlice";
import environmentReducer from "./features/environment/environmentSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    sidebar: sidebarReducer,
    environment: environmentReducer,
  },
});

export default store;

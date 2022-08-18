import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import heroReducer from "./features/hero/heroSlice";
import environmentReducer from "./features/environment/environmentSlice";
import contactsReducer from "./features/contacts/contactsSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    sidebar: sidebarReducer,
    environment: environmentReducer,
    contacts: contactsReducer,
  },
});

export default store;

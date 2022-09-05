import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import heroReducer from "./features/hero/heroSlice";
import environmentReducer from "./features/environment/environmentSlice";
import contactsReducer from "./features/contacts/contactsSlice";
import menuReducer from "./features/menu/menuSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    sidebar: sidebarReducer,
    environment: environmentReducer,
    contacts: contactsReducer,
    menu: menuReducer,
  },
});

export default store;

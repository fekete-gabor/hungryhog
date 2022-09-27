import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import heroReducer from "./features/hero/heroSlice";
import environmentReducer from "./features/environment/environmentSlice";
import contactsReducer from "./features/contacts/contactsSlice";
import menuReducer from "./features/menu/menuSlice";
import galleryReducer from "./features/gallery/gallerySlice";
import modalReducer from "./features/modal/modalSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    sidebar: sidebarReducer,
    environment: environmentReducer,
    contacts: contactsReducer,
    menu: menuReducer,
    gallery: galleryReducer,
    modal: modalReducer,
  },
});

export default store;

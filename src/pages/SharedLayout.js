import { Navbar, Sidebar, Footer, CreatedBy, ScrollTop } from "../components";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getGalleryImages } from "../features/gallery/gallerySlice";
import { getContacts } from "../features/contacts/contactsSlice";
import { getMenuItems, getMenuSlides } from "../features/menu/menuSlice";
import { useDispatch } from "react-redux/es/exports";

const SharedLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
    dispatch(getMenuItems());
    dispatch(getMenuSlides());
    dispatch(getGalleryImages());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
      <ScrollTop />
      <CreatedBy />
    </>
  );
};

export default SharedLayout;

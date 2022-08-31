import { Navbar, Sidebar, Footer, CreatedBy, ScrollTop } from "../components";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getContacts } from "../features/contacts/contactsSlice";
import { useDispatch } from "react-redux/es/exports";

const SharedLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
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

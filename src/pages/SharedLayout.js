import { Navbar, Sidebar, Footer, CreatedBy, ScrollTop } from "../components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
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

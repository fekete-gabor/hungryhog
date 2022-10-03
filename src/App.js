import {
  SharedLayout,
  HomePage,
  MenuPage,
  AboutUsPage,
  GalleryPage,
  ContactsPage,
  ErrorPage,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/rolunk" element={<AboutUsPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/elerhetosegek" element={<ContactsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

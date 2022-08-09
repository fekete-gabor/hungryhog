import {
  SharedLayout,
  HomePage,
  MenuPage,
  ReservationPage,
  AboutUsPage,
  GalleryPage,
  NewsPage,
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
            <Route path="/asztalfoglalas" element={<ReservationPage />} />
            <Route path="/rolunk" element={<AboutUsPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/hirek" element={<NewsPage />} />
            <Route path="/elerhetosegek" element={<ContactsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

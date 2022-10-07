import { useEffect } from "react";
import styled from "styled-components";
import {
  Hero,
  Environment,
  Slogan,
  HomePageMenu,
  ContactUs,
  ContactsForm,
  GoogleMaps,
} from "../components/";
import { getMenuSlides, getMenuItems } from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";

const HomePage = () => {
  const { menuSlides, menuItems } = useSelector((store) => store.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    const refresh = sessionStorage.getItem("refresh");
    if (!refresh) {
      window.location.reload();
      sessionStorage.setItem("refresh", "true");
    }
  }, []);

  useEffect(() => {
    if (menuSlides.length <= 0) dispatch(getMenuSlides());
    if (menuItems.length <= 0) dispatch(getMenuItems());
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Hero />
      <Environment />
      <Slogan />
      <HomePageMenu />
      <ContactUs />
      <ContactsForm />
      <GoogleMaps />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: fit-content;
`;

export default HomePage;

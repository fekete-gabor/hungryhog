import { useEffect } from "react";
import styled from "styled-components";
import { getContacts } from "../features/contacts/contactsSlice";
import { getMenuItems, getMenuSlides } from "../features/menu/menuSlice";
import { useDispatch } from "react-redux/es/exports";
import {
  Hero,
  Environment,
  Slogan,
  HomePageMenu,
  ContactUs,
  ContactsForm,
  GoogleMaps,
} from "../components/";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
    dispatch(getMenuItems());
    dispatch(getMenuSlides());
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

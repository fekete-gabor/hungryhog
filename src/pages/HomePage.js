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

const HomePage = () => {
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

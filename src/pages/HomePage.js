import styled from "styled-components";
import {
  Hero,
  Environment,
  Slogan,
  ContactUs,
  ContactsForm,
} from "../components/";

const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <Environment />
      <Slogan />
      <ContactUs />
      <ContactsForm />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: fit-content;
`;

export default HomePage;

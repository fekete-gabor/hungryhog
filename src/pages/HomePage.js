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
      <div className="a"></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: fit-content;
  .a {
    height: 300vh;
    background: #222;
  }
`;

export default HomePage;

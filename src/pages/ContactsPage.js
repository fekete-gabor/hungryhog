import { ContactUs, ContactsForm, GoogleMaps } from "../components/";
import styled from "styled-components";

const ContactsPage = () => {
  return (
    <Wrapper>
      <div className="title-container">
        <h2>vedd fel velünk a kapcsolatot!</h2>
      </div>
      <ContactUs />
      <ContactsForm />
      <GoogleMaps />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  background: var(--primary-black);
`;

export default ContactsPage;

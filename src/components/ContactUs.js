import { useEffect } from "react";
import styled from "styled-components";
import { Contacts, ContactsForm, OpeningHours } from "./index";
import { getContacts } from "../features/contacts/contactsSlice";
import { useDispatch } from "react-redux/es/exports";

const ContactUs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <Wrapper>
      <Contacts />
      <OpeningHours />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  text-align: center;
  background: var(--primary-black);
  display: grid;
  padding: 3rem 1rem;
  gap: 2rem;
  border-bottom: var(--border);

  @media screen and (min-width: 992px) {
    padding: 5rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

export default ContactUs;

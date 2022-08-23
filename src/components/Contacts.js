import styled from "styled-components";
import { ContactsForm } from "./index";
import { useSelector } from "react-redux/es/exports";
import ReactMarkdown from "react-markdown";

const Contacts = () => {
  const { contacts } = useSelector((store) => store.contacts);

  return (
    <Wrapper>
      <div className="contacts">
        <h2>{contacts?.attributes?.title}</h2>
        <ReactMarkdown children={contacts?.attributes?.desc} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  padding: 2rem 0;
  border: inset 2px var(--primary-clr-5);
  border-radius: 25px;

  h2 {
    padding-bottom: 3rem;
    color: var(--primary-clr-3);
  }

  p {
    align-items: center;
    font-size: 1.5rem;
    color: var(--primary-white);
  }

  @media screen and (min-width: 300px) {
    padding: 2rem;
  }
`;

export default Contacts;

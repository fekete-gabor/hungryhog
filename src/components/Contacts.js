import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";

const Contacts = () => {
  const { contacts } = useSelector((store) => store.contacts);

  return (
    <Wrapper>
      <div className="contacts">
        <h2>elérhetőségek</h2>
        {contacts.map((contact) => {
          const { id } = contact;
          const { address, email, phone_number } = contact.attributes;

          return (
            <div key={id}>
              <p>{address}</p>
              <p>{email}</p>
              <p>{phone_number}</p>
            </div>
          );
        })}
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
    margin: 1rem 0;
    align-items: center;
    font-size: 1.25rem;
    color: var(--primary-white);
  }

  @media screen and (min-width: 300px) {
    padding: 2rem;

    p {
      font-size: 1.75rem;
    }
  }
`;

export default Contacts;

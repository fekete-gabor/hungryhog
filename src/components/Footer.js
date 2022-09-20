import styled from "styled-components";
import { Contacts, OpeningHours } from "./index";
const Footer = () => {
  return (
    <Wrapper>
      <section className="container">
        <div className="contacts">
          <h4>elérhetőségek</h4>
          <Contacts layout={"flex"} />
        </div>
      </section>
      <section>
        <h4>kártya elfogadás</h4>
        <img
          src="https://www.merchantequip.com/images/logos/visa-mastercard-211x65.gif"
          width="211"
          height="65"
          alt="Merchant Equipment Store Credit Card Logos"
        />
      </section>
      <section className="opening-hours">
        <header>
          <h4>nyitvatartás</h4>
        </header>
        <article>
          <OpeningHours />
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  overflow: hidden;
  background: var(--primary-clr-4);
  border-top: var(--border);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  gap: 2rem;
  padding: 2rem;

  .contacts {
    margin-bottom: 0.5rem;
  }

  p,
  a {
    color: var(--primary-white);
    font-size: 1rem;
  }

  h4 {
    color: var(--primary-clr-3);
    margin-bottom: 2rem;
    text-decoration: underline var(--primary-white);
  }

  svg {
    margin: 0.25rem;
    font-size: 2rem;
    color: var(--primary-clr-3);
    transition: var(--transition);
    &:hover {
      color: var(--primary-clr-5);
    }
  }

  .opening-hours {
    display: grid;
    article {
      display: flex;
      gap: 2rem;
    }
  }
`;

export default Footer;

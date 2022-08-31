import styled from "styled-components";
import { Contacts, OpeningHours } from "./index";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <Wrapper>
      <div className="contacts-container">
        <h2>elérhetőségek</h2>
        <Contacts />
      </div>
      <div className="opening-hours-container">
        <h2>nyitvatartás</h2>
        <OpeningHours />
        <Link to="/menu">
          <button className="menu-btn btn">
            megnézem az étlapot<span></span>
          </button>
        </Link>
      </div>
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

  // ******************
  // CONTACTS CONTAINER
  // ******************

  .contacts-container {
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

    .media-icon-container {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      svg {
        margin-top: 0.5rem;
        font-size: 2.5rem;
        color: var(--primary-clr-3);
        display: block;
        transition: var(--transition);
        &:hover {
          color: var(--primary-clr-5);
        }
      }
    }

    @media screen and (min-width: 300px) {
      padding: 2rem;

      p {
        font-size: 1.75rem;
      }
    }
  }

  // ******************
  // END OF CONTACTS CONTAINER
  // ******************

  // ******************
  // OPENING HOURS CONTAINER
  // ******************

  .opening-hours-container {
    display: grid;
    align-items: center;
    padding: 2rem 0;
    border: outset 2px var(--primary-clr-5);
    border-radius: 25px;

    h2 {
      padding-bottom: 3rem;
      color: var(--primary-clr-3);
    }

    p {
      font-size: 1.25rem;
      color: var(--primary-white);
    }

    div {
      margin-bottom: 0.5rem;
    }

    .capitalize {
      text-transform: capitalize;
    }

    span {
      z-index: -1;
      position: absolute;
      top: 0;
      left: -10%;
      background: var(--primary-clr-5);
      height: 100%;
      transform: skewX(-20deg);
    }

    @media screen and (min-width: 300px) {
      padding: 2rem;

      p {
        font-size: 1.5rem;
      }
    }
  }

  // ******************
  // END OF OPENING HOURS CONTAINER
  // ******************
`;

export default ContactUs;

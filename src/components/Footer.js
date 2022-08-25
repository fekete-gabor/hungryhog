import styled from "styled-components";
import { mediaIcons } from "../utils/icons";
import { useSelector } from "react-redux/es/exports";

const Footer = () => {
  const { contacts } = useSelector((store) => store.contacts);
  const { openingHours } = useSelector((store) => store.contacts);

  return (
    <Wrapper>
      <section className="container">
        <div className="contacts">
          {contacts.map((contact) => {
            const { id } = contact;
            const { address, email, phone_number } = contact.attributes;

            return (
              <p key={id}>
                {address} | {email} | {phone_number}
              </p>
            );
          })}
        </div>
      </section>
      <section className="media-icons">{mediaIcons}</section>
      <section className="w">
        <img
          src="https://www.merchantequip.com/image/?logos=v|m|s|me&height=64"
          alt="Merchant Equipment Store Credit Card Logos"
        />
      </section>
      <section className="opening-hours">
        {openingHours.map((item) => {
          const { id, day_start, day_end, hour_start, hour_end } = item;

          return (
            <div key={id}>
              <p className="capitalize">
                {day_end !== null
                  ? `${day_start} - ${day_end}:`
                  : `${day_start}:`}
              </p>
              <p>
                {hour_end !== null
                  ? `${hour_start} - ${hour_end}-ig`
                  : `${hour_start}`}
              </p>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.footer``;

export default Footer;

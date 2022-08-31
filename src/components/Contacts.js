import { mediaIcons } from "../utils/icons";
import { useSelector } from "react-redux/es/exports";

const Contacts = ({ layout }) => {
  const { contacts } = useSelector((store) => store.contacts);

  return (
    <div className="contacts">
      {contacts.map((contact) => {
        const { id } = contact;
        const { address, email, phone_number } = contact.attributes;

        return (
          <div key={id}>
            {layout === "flex" ? (
              <p>
                {address} | {email} | {phone_number}
              </p>
            ) : (
              <>
                <p>{address}</p>
                <p>{email}</p>
                <p>{phone_number}</p>
              </>
            )}
          </div>
        );
      })}
      <div className="media-icon-container">{mediaIcons}</div>
    </div>
  );
};

export default Contacts;

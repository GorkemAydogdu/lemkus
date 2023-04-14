import React from "react";

import ContactItem from "./contactItem";

const ContactCtt = () => {
  return (
    <div className="contact__ctt">
      <h4 className="contact__heading--4">CONTACT</h4>
      <ul className="contact__list">
        <ContactItem>
          <a href="/" className="contact__link underline">
            info@jacklemkus.co.za
          </a>
        </ContactItem>
        <ContactItem>
          <a href="/" className="contact__link underline">
            021 425 2166
          </a>
        </ContactItem>
        <ContactItem>
          <a href="/" className="contact__link underline">
            084 581 1878
          </a>
        </ContactItem>
      </ul>
    </div>
  );
};

export default ContactCtt;

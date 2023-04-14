import React from "react";

import ContactItem from "./contactItem";

const ContactSocial = () => {
  return (
    <div className="contact__social">
      <h4 className="contact__heading--4">STALK US</h4>
      <ul className="contact__list">
        <ContactItem>
          <a
            href="https://www.facebook.com/jacklemkus"
            className="contact__link"
          >
            Facebook
          </a>
        </ContactItem>
        <ContactItem>
          <a
            href="https://www.instagram.com/lemkus_/"
            className="contact__link"
          >
            Instagram
          </a>
        </ContactItem>
        <ContactItem>
          <a href="https://twitter.com/lemkus_" className="contact__link">
            Twitter
          </a>
        </ContactItem>
        <ContactItem>
          <a
            href="https://za.pinterest.com/jlsonline/_saved/"
            className="contact__link"
          >
            Pinterest
          </a>
        </ContactItem>
      </ul>
    </div>
  );
};

export default ContactSocial;

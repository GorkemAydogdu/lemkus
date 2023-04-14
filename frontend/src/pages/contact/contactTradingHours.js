import React from "react";
import ContactItem from "./contactItem";

const ContactTradingHours = () => {
  return (
    <div className="contact__tradingHours">
      <h4 className="contact__heading--4">TRADING HOURS</h4>
      <ul className="contact__list">
        <ContactItem>
          <span>Monday - Friday:</span>
          <span className="underline">08:45 to 17:00</span>
        </ContactItem>
        <ContactItem>
          <span>Saturdays:</span>
          <span className="underline">09:00 to 14:00</span>
        </ContactItem>
        <ContactItem>
          <span>Sundays:</span>
          <span className="underline">Closed</span>
        </ContactItem>
        <ContactItem>
          <span>Public Holidays:</span>
          <span className="underline">Closed</span>
        </ContactItem>
      </ul>
    </div>
  );
};

export default ContactTradingHours;

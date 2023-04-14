import React from "react";

import ContactLocation from "./contactLocation";
import ContactCtt from "./contactCtt";
import ContactTradingHours from "./contactTradingHours";
import ContactSocial from "./contactSocial";

const ContactInfo = () => {
  return (
    <div className="contact__info">
      <ContactLocation />
      <ContactCtt />
      <ContactTradingHours />
      <ContactSocial />
    </div>
  );
};

export default ContactInfo;

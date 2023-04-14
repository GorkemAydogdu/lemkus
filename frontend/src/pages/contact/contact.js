import React, { useRef } from "react";

import Footer from "../../components/Footer/Footer";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";

import ContactInfo from "./contactInfo";
import ContactContent from "./contactContent";

const Contact = () => {
  const smoothScrollWrapper = useRef();

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="contact">
        <div className="contact__header">
          <div className="contact__title">
            <h1 className="contact__heading--1">
              <span>DROP US</span>
              <span>A LINE</span>
            </h1>
          </div>
          <ContactInfo />
        </div>
        <ContactContent />
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Contact;

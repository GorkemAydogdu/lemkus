import React, { useEffect } from "react";

import { ReactComponent as GetInTouch } from "../../assets/get-in-touch.svg";
import gsap from "gsap";

const ContactContent = () => {
  useEffect(() => {
    gsap.to(".contact__getInTouch svg", {
      rotation: 360 * 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".contact",
        start: "top top",
        end: "+=5000",
        scrub: 2,
      },
    });
  }, []);
  return (
    <div className="contact__content">
      <p className="contact__text">
        We are available to help with any queries that you have about your
        purchase or product you are looking to buy online (Mon - Fri from 08:45
        - 16:30), you can call our help center on 084 581 1878 or you can email
        us any time and will be guaranteed to receive a response within 12
        hours. Please note our online store is closed over weekends.
      </p>
      <div className="contact__getInTouch">
        <GetInTouch />
        <div className="contact__ball contact__ball--1"></div>
        <div className="contact__ball contact__ball--2"></div>
      </div>
    </div>
  );
};

export default ContactContent;

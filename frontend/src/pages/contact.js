import React, { useRef, useEffect } from "react";

import Footer from "../components/Footer/Footer";
import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";

import { ReactComponent as GetInTouch } from "../assets/get-in-touch.svg";

import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const viewAllStatic = useRef();
  const viewAllHover = useRef();
  const smoothScrollWrapper = useRef();

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

  const mouseEnterHandler = () => {
    viewAllHover.current.style.display = "inline-block";
    viewAllStatic.current.style.display = "none";
  };

  const mouseLeaveHandler = () => {
    viewAllHover.current.style.display = "none";
    viewAllStatic.current.style.display = "inline-block";
  };
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
          <div className="contact__info">
            <div className="contact__location">
              <h4 className="contact__heading--4">LOCATION</h4>
              <p className="contact__location--address">
                Jack Lemkus Store, 26 St Georges Mall, Cape Town
              </p>
              <a
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                href="https://www.google.com/maps/dir//Jack+Lemkus,+26a+St+Georges+Mall,+Cape+Town+City+Centre,+Cape+Town,+8000/@-33.9209633,18.4230041,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1dcc6763e0f8345f:0xf9028c11e332f35e!2m2!1d18.4230041!2d-33.9209633"
                className="contact__location--link"
              >
                <span ref={viewAllStatic} className="static">
                  GET DIRECTIONS
                </span>
                <span ref={viewAllHover} className="hover">
                  GET DIRECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GET
                  DIRECTIONS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </a>
            </div>
            <div className="contact__ctt">
              <h4 className="contact__heading--4">CONTACT</h4>
              <ul className="contact__list">
                <li className="contact__item">
                  <a href="/" className="contact__link underline">
                    info@jacklemkus.co.za
                  </a>
                </li>
                <li className="contact__item">
                  <a href="/" className="contact__link underline">
                    021 425 2166
                  </a>
                </li>
                <li className="contact__item">
                  <a href="/" className="contact__link underline">
                    084 581 1878
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact__tradingHours">
              <h4 className="contact__heading--4">TRADING HOURS</h4>
              <ul className="contact__list">
                <li className="contact__tradingHours--item contact__item">
                  <span>Monday - Friday:</span>
                  <span className="underline">08:45 to 17:00</span>
                </li>
                <li className="contact__tradingHours--item contact__item">
                  <span>Saturdays:</span>
                  <span className="underline">09:00 to 14:00</span>
                </li>
                <li className="contact__tradingHours--item contact__item">
                  <span>Sundays:</span>
                  <span className="underline">Closed</span>
                </li>
                <li className="contact__tradingHours--item contact__item">
                  <span>Public Holidays:</span>
                  <span className="underline">Closed</span>
                </li>
              </ul>
            </div>
            <div className="contact__social">
              <h4 className="contact__heading--4">STALK US</h4>
              <ul className="contact__list">
                <li className="contact__item">
                  <a
                    href="https://www.facebook.com/jacklemkus"
                    className="contact__link"
                  >
                    Facebook
                  </a>
                </li>
                <li className="contact__item">
                  <a
                    href="https://www.instagram.com/lemkus_/"
                    className="contact__link"
                  >
                    Instagram
                  </a>
                </li>
                <li className="contact__item">
                  <a
                    href="https://twitter.com/lemkus_"
                    className="contact__link"
                  >
                    Twitter
                  </a>
                </li>
                <li className="contact__item">
                  <a
                    href="https://za.pinterest.com/jlsonline/_saved/"
                    className="contact__link"
                  >
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <p className="contact__text">
            We are available to help with any queries that you have about your
            purchase or product you are looking to buy online (Mon - Fri from
            08:45 - 16:30), you can call our help center on 084 581 1878 or you
            can email us any time and will be guaranteed to receive a response
            within 12 hours. Please note our online store is closed over
            weekends.
          </p>
          <div className="contact__getInTouch">
            <GetInTouch />
            <div className="contact__ball contact__ball--1"></div>
            <div className="contact__ball contact__ball--2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Contact;

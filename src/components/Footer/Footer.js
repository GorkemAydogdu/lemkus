import React, { useContext } from "react";

import ThemeContext from "../../context/theme-context";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const Footer = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div
      className={`footer ${
        themeCtx.isLocationChanged === true ? "footer__dark" : "footer__light"
      }`}
    >
      <div className="footer__group">
        <div className="footer__join">
          <span className="footer__join--text">Join Our Community</span>
          <input
            type="email"
            placeholder="Email"
            className="footer__join--email"
          />
        </div>
        <div className="footer__menu">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/pages/about" className="footer__link">
                About Us
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/pages/faq" className="footer__link">
                Faq
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/pages/contact" className="footer__link">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/pages/privacy-policy" className="footer__link">
                Privacy Policy
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/pages/faq" className="footer__link">
                Refund Policy
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/pages/terms-and-conditions" className="footer__link">
                Terms of Service
              </Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/pages/faq" className="footer__link">
                How to Order
              </Link>
            </li>
            <li className="footer__item">
              <a
                href="https://www.ram.co.za/contact/TrackYourParcel"
                className="footer__link"
              >
                Track Your Order
              </a>
            </li>
            <li className="footer__item">
              <Link to="/pages/faq" className="footer__link">
                Return & Exchanges
              </Link>
            </li>
          </ul>
          <ul className="footer__list footer__list--mobile">
            <li className="footer__item">
              <a
                href="https://www.instagram.com/lemkus_/"
                className="footer__link"
              >
                Instagram
              </a>
            </li>
            <li className="footer__item">
              <a href="https://twitter.com/lemkus_" className="footer__link">
                Twitter
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.facebook.com/jacklemkus"
                className="footer__link"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__group">
        <a href="/" className="footer__logo">
          <Logo />
        </a>
      </div>
      <div className="footer__group">
        <span className="footer__copyright">
          &copy; 2022 Jack Lemkus - All Rights Reserved
        </span>
        <div className="footer__social footer__social--desktop">
          <ul className="footer__social--list">
            <li className="footer__social--item">
              <a
                href="https://www.instagram.com/lemkus_/"
                className="footer__link"
              >
                Instagram
              </a>
            </li>
            <li className="footer__social--item">
              <a href="https://twitter.com/lemkus_" className="footer__link">
                Twitter
              </a>
            </li>
            <li className="footer__social--item">
              <a
                href="https://www.facebook.com/jacklemkus"
                className="footer__link"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

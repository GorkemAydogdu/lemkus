import React from "react";

import FooterItem from "./FooterItem";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <div className="footer__menu">
      <ul className="footer__list">
        <FooterItem>
          <Link to="/pages/about" className="footer__link">
            About Us
          </Link>
        </FooterItem>
        <FooterItem>
          <Link to="/pages/faq" className="footer__link">
            Faq
          </Link>
        </FooterItem>
        <FooterItem>
          <Link to="/pages/contact" className="footer__link">
            Contact Us
          </Link>
        </FooterItem>
      </ul>
      <ul className="footer__list">
        <FooterItem>
          <Link to="/pages/privacy-policy" className="footer__link">
            Privacy Policy
          </Link>
        </FooterItem>
        <FooterItem>
          <Link to="/pages/faq" className="footer__link">
            Refund Policy
          </Link>
        </FooterItem>
        <FooterItem>
          <Link to="/pages/terms-and-conditions" className="footer__link">
            Terms of Service
          </Link>
        </FooterItem>
      </ul>
      <ul className="footer__list">
        <FooterItem>
          <Link to="/pages/faq" className="footer__link">
            How to Order
          </Link>
        </FooterItem>
        <FooterItem>
          <a
            href="https://www.ram.co.za/contact/TrackYourParcel"
            className="footer__link"
          >
            Track Your Order
          </a>
        </FooterItem>
        <FooterItem>
          <Link to="/pages/faq" className="footer__link">
            Return & Exchanges
          </Link>
        </FooterItem>
      </ul>
      <ul className="footer__list footer__list--mobile">
        <FooterItem>
          <a href="https://www.instagram.com/lemkus_/" className="footer__link">
            Instagram
          </a>
        </FooterItem>
        <FooterItem>
          <a href="https://twitter.com/lemkus_" className="footer__link">
            Twitter
          </a>
        </FooterItem>
        <FooterItem>
          <a
            href="https://www.facebook.com/jacklemkus"
            className="footer__link"
          >
            Facebook
          </a>
        </FooterItem>
      </ul>
    </div>
  );
};

export default FooterMenu;

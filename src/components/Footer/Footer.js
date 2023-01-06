import React, { useContext } from "react";

import FooterGroup from "./FooterGroup";
import FooterMenu from "./FooterMenu";
import FooterItem from "./FooterItem";
import FooterJoin from "./FooterJoin";

import UIContext from "../../context/ui-context";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const Footer = () => {
  const uiCtx = useContext(UIContext);

  return (
    <div
      className={`footer ${
        uiCtx.isLocationChanged === true ? "footer__dark" : "footer__light"
      }`}
    >
      <FooterGroup>
        <FooterJoin />
        <FooterMenu />
      </FooterGroup>
      <FooterGroup>
        <a href="/" className="footer__logo">
          <Logo />
        </a>
      </FooterGroup>
      <FooterGroup>
        <span className="footer__copyright">
          &copy; 2022 Jack Lemkus - All Rights Reserved
        </span>
        <div className="footer__social footer__social--desktop">
          <ul className="footer__social--list">
            <FooterItem className="footer__social--item">
              <a
                href="https://www.instagram.com/lemkus_/"
                className="footer__link"
              >
                Instagram
              </a>
            </FooterItem>
            <FooterItem className="footer__social--item">
              <a href="https://twitter.com/lemkus_" className="footer__link">
                Twitter
              </a>
            </FooterItem>
            <FooterItem className="footer__social--item">
              <a
                href="https://www.facebook.com/jacklemkus"
                className="footer__link"
              >
                Facebook
              </a>
            </FooterItem>
          </ul>
        </div>
      </FooterGroup>
    </div>
  );
};

export default Footer;

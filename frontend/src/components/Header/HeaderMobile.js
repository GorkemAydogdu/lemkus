import React, { useContext } from "react";

import { Link } from "react-router-dom";

import UIContext from "../../context/ui-context";

import Logo from "../../assets/logo.svg";

const HeaderMobile = () => {
  const uiCtx = useContext(UIContext);

  return (
    <div className="header__mobile">
      <div className="header__mobile--left">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__mobile--right">
        <Link to="/search">Search</Link>
        <span
          onClick={() => {
            uiCtx.toggleCart();
          }}
          className="bag"
        >
          Bag (0)
        </span>
        <div
          onClick={() => {
            uiCtx.toggleMenu();
          }}
          className="header__mobile--menu"
        >
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;

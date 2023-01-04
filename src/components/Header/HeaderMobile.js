import React, { useContext } from "react";

import UIContext from "../../context/ui-context";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const HeaderMobile = () => {
  const uiCtx = useContext(UIContext);

  const clickMenuButtonHandler = () => {
    uiCtx.toggleMenu();
  };
  const clickBagButtonHandler = () => {
    uiCtx.toggleCart();
  };

  return (
    <div className="header__mobile">
      <div className="header__mobile--left">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="header__mobile--right">
        <a href="/">Search</a>
        <span onClick={clickBagButtonHandler} className="bag">
          Bag (0)
        </span>
        <div onClick={clickMenuButtonHandler} className="header__mobile--menu">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;

import React from "react";
import { useDispatch } from "react-redux";
import { mobileActions } from "../../store/mobile-slice";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const HeaderMobile = () => {
  const dispatch = useDispatch();

  const clickButtonHandler = () => {
    dispatch(mobileActions.toggleButton());
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
        <a href="/">Bag (0)</a>
        <div onClick={clickButtonHandler} className="header__mobile--menu">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;

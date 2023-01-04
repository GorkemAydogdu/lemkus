import React, { useContext } from "react";

import UIContext from "../../context/ui-context";

import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Bag } from "../../assets/shopping-bag.svg";
import { ReactComponent as User } from "../../assets/user-o.svg";
import Button from "../UI/Button";

const HeaderUser = () => {
  const uiCtx = useContext(UIContext);
  function clickButtonHandler() {
    uiCtx.toggleCart();
  }

  return (
    <div className="header__user">
      <a href="/">
        <Search />
      </a>
      <a href="/">
        <User />
      </a>
      <a href="/">
        <Heart />
      </a>
      <Button onClick={clickButtonHandler} className="header__cart">
        <span className="header__counter">0</span>
        <Bag />
      </Button>
    </div>
  );
};

export default HeaderUser;

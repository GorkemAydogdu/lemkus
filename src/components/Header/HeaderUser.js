import React from "react";

import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Bag } from "../../assets/shopping-bag.svg";
import { ReactComponent as User } from "../../assets/user-o.svg";

const HeaderUser = () => {
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
      <a href="/">
        <span className="header__counter">0</span>
        <Bag />
      </a>
    </div>
  );
};

export default HeaderUser;

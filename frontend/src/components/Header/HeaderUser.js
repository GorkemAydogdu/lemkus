import React, { useContext } from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import UIContext from "../../context/ui-context";

import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Bag } from "../../assets/shopping-bag.svg";
import { ReactComponent as User } from "../../assets/user-o.svg";
import Button from "../UI/Button";

const HeaderUser = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const uiCtx = useContext(UIContext);
  function clickWishlistButtonHandler() {
    uiCtx.toggleWishlist();
  }

  function clickCartButtonHandler() {
    uiCtx.toggleCart();
  }

  return (
    <div className="header__user">
      <Link to="/search">
        <Search />
      </Link>
      <Link to="/account">
        <User />
      </Link>
      <Button onClick={clickWishlistButtonHandler} className="header__wishlist">
        <Heart />
      </Button>
      <Button onClick={clickCartButtonHandler} className="header__cart">
        <span className="header__counter">{totalQuantity}</span>
        <Bag />
      </Button>
    </div>
  );
};

export default HeaderUser;

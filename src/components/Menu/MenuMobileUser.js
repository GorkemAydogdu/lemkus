import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UIContext from "../../context/ui-context";

import Button from "../UI/Button";

const MenuMobileUser = () => {
  const uiCtx = useContext(UIContext);

  function clickWishlistButtonHandler() {
    uiCtx.toggleWishlist();
  }

  return (
    <div className="menuMobile__user">
      <Link to="/">Account</Link>
      <Button onClick={clickWishlistButtonHandler}>Wishlist</Button>
      <Link to="/pages/contact">Contact</Link>
    </div>
  );
};

export default MenuMobileUser;

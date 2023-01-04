import React from "react";
import { Link } from "react-router-dom";

const MenuMobileUser = () => {
  return (
    <div className="menuMobile__user">
      <Link to="/">Account</Link>
      <Link to="/">Wishlist</Link>
      <Link to="/pages/contact">Contact</Link>
    </div>
  );
};

export default MenuMobileUser;

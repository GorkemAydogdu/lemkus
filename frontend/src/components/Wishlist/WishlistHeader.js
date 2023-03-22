import React from "react";

import Button from "../UI/Button";

const WishlistHeader = () => {
  function clickButtonHandler() {
    const bg = document.querySelector(".wishlist__bg");
    bg.style.display = "block";
    const clearList = document.querySelector(".wishlist__clear");
    clearList.style.display = "flex";
  }

  return (
    <div className="wishlist__header">
      <h2>My Wishlist</h2>
      <Button onClick={clickButtonHandler} className="wishlist__menu">
        <span className="wishlist__menu--dot"></span>
      </Button>
    </div>
  );
};

export default WishlistHeader;

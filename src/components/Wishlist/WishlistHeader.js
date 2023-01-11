import React from "react";

import Button from "../UI/Button";

const WishlistHeader = () => {
  return (
    <div className="wishlist__header">
      <h2>My Wishlist</h2>
      <Button className="wishlist__menu">
        <span></span>
      </Button>
    </div>
  );
};

export default WishlistHeader;

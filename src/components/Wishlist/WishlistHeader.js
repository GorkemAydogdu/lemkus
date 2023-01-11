import React from "react";

import Button from "../UI/Button";

const WishlistHeader = () => {
  return (
    <div className="wishlist__header">
      <h2>My Wishlist</h2>
      <Button className="wishlist__menu">
        <span className="wishlist__menu--dot"></span>

        <div className="wishlist__clear">
          {/* <div className="wishlist__bg"></div> */}
          <span>Z</span>
          <span>Clear List</span>
        </div>
      </Button>
    </div>
  );
};

export default WishlistHeader;

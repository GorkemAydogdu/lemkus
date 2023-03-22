import React, { useContext } from "react";

import UIContext from "../../context/ui-context";

import Button from "../UI/Button";

import gsap from "gsap";

const WishlistEmpty = () => {
  const uiCtx = useContext(UIContext);

  function closeWishlistHandler() {
    uiCtx.toggleWishlist();
    gsap.to(".backdrop--wishlist", {
      opacity: 0,
      display: "none",
      ease: "Expo.easeInOut",
    });
    gsap.to("body", {
      overflow: "visible",
    });
  }
  return (
    <div className="wishlist__empty">
      <h3 className="wishlist__empty--title">Love It? Add to my Wishlist</h3>
      <p className="wishlist__empty--text">
        My Wishlist allows you to keep track of all of your favorites and
        shopping activity whether you're on your computer, phone, or tablet. You
        won't have to waste time searching all over again for that item you
        loved on your phone the other day - it's all here in one place!
      </p>
      <Button
        onClick={closeWishlistHandler}
        className="wishlist__button wishlist__button--continue"
      >
        Continue Shopping
      </Button>
    </div>
  );
};

export default WishlistEmpty;

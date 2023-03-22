import React, { useContext } from "react";

import UIContext from "../../context/ui-context";

import { ReactComponent as X } from "../../assets/x.svg";
import { ReactComponent as User } from "../../assets/user-o.svg";

import Button from "../UI/Button";

import gsap from "gsap";

const WishlistUser = () => {
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
    <div className="wishlist__user">
      <Button className="wishlist__loginStatus">
        <User />
        <span>Guest Shopper</span>
      </Button>
      <Button onClick={closeWishlistHandler} className="wishlist__close">
        <X />
      </Button>
    </div>
  );
};

export default WishlistUser;

import React, { useContext } from "react";

import UIContext from "../../context/ui-context";

import X from "../../assets/x.svg";
import User from "../../assets/user-o.svg";
import Button from "../UI/Button";
import { useAuth0 } from "@auth0/auth0-react";

import gsap from "gsap";

const WishlistUser = () => {
  const uiCtx = useContext(UIContext);
  const { isAuthenticated, user } = useAuth0();
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
        <span>{isAuthenticated === false ? "Guest Shopper" : user.name}</span>
      </Button>
      <Button onClick={closeWishlistHandler} className="wishlist__close">
        <X />
      </Button>
    </div>
  );
};

export default WishlistUser;

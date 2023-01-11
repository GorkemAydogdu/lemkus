import React, { useContext, useEffect } from "react";

import UIContext from "../../context/ui-context";

import WishlistEmpty from "./WishlistEmpty";
import WishlistHeader from "./WishlistHeader";
import WishlistUser from "./WishlistUser";

import gsap from "gsap";

const Wishlist = () => {
  const uiCtx = useContext(UIContext);

  useEffect(() => {
    if (uiCtx.wishlistIsActive === true) {
      gsap.to(".backdrop--wishlist", {
        opacity: 0.3,
        display: "block",
        visibility: "visible",
        ease: "Expo.easeInOut",
      });
      gsap.to("body", {
        overflow: "hidden",
      });
    }
  }, [uiCtx]);
  return (
    <>
      {uiCtx.wishlistIsActive && (
        <div
          className={`wishlist ${
            uiCtx.isLocationChanged === true ? "dark" : "light"
          }`}
        >
          <WishlistUser />
          <div className="wishlist__detail">
            <WishlistHeader />
            <WishlistEmpty />
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlist;

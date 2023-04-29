import React, { useContext, useEffect } from "react";

import UIContext from "../../context/ui-context";

import WishlistHeader from "./WishlistHeader";
import WishlistUser from "./WishlistUser";
import WishlistEmpty from "./WishlistEmpty";
import WishlistContent from "./WishlistContent";

import gsap from "gsap";

const Wishlist = ({ wishlist }) => {
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
    } else {
      gsap.to(".backdrop--wishlist", {
        opacity: 0,
        display: "none",
        ease: "Expo.easeInOut",
      });
      gsap.to("body", {
        overflow: "visible",
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
            {wishlist.length === 0 ? (
              <WishlistEmpty />
            ) : (
              <WishlistContent data={wishlist} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlist;

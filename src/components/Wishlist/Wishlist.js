import React, { useContext, useEffect, useRef } from "react";

import UIContext from "../../context/ui-context";

import WishlistEmpty from "./WishlistEmpty";
import WishlistHeader from "./WishlistHeader";
import WishlistUser from "./WishlistUser";
import WishlistContent from "./WishlistContent";

import { ReactComponent as Bin } from "../../assets/bin2.svg";

import gsap from "gsap";
import Button from "../UI/Button";
import WishlistSelectedDetail from "./WishlistSelectedDetail";

const Wishlist = () => {
  const bgRef = useRef();
  const clearRef = useRef();
  const uiCtx = useContext(UIContext);

  function closeButtonHandler() {
    bgRef.current.style.display = "none";
    clearRef.current.style.display = "none";
  }

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
            {/* <WishlistEmpty /> */}
            <WishlistContent />
            {/* <WishlistSelectedDetail /> */}
            <div
              ref={bgRef}
              onClick={closeButtonHandler}
              className="wishlist__bg"
            ></div>
            <Button ref={clearRef} className="wishlist__clear">
              <span>
                <Bin />
              </span>
              <span>Clear List</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlist;

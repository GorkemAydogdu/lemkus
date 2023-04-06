import React, { useContext, useEffect, useRef, useState } from "react";

import UIContext from "../../context/ui-context";

import WishlistHeader from "./WishlistHeader";
import WishlistUser from "./WishlistUser";
import WishlistEmpty from "./WishlistEmpty";
import WishlistContent from "./WishlistContent";
import WishlistSelectedDetail from "./WishlistSelectedDetail";

import { ReactComponent as Bin } from "../../assets/bin2.svg";

import gsap from "gsap";
import Button from "../UI/Button";

const Wishlist = () => {
  const bgRef = useRef();
  const clearRef = useRef();
  const uiCtx = useContext(UIContext);
  const [wishlist, setWishlist] = useState([]);

  function closeButtonHandler() {
    bgRef.current.style.display = "none";
    clearRef.current.style.display = "none";
  }

  async function getWishlist() {
    const res = await fetch("http://localhost:5000/wishlist");
    const data = await res.json();
    setWishlist(data);
  }
  useEffect(() => {
    getWishlist();
  }, []);

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
            {wishlist.length === 0 ? (
              <WishlistEmpty />
            ) : (
              <WishlistContent data={wishlist} />
            )}

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

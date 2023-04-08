import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import UIContext from "../../context/ui-context";

import WishlistHeader from "./WishlistHeader";
import WishlistUser from "./WishlistUser";
import WishlistEmpty from "./WishlistEmpty";
import WishlistContent from "./WishlistContent";

import { ReactComponent as Bin } from "../../assets/bin2.svg";
import { useAuth0 } from "@auth0/auth0-react";
import gsap from "gsap";
import Button from "../UI/Button";

const Wishlist = () => {
  const bgRef = useRef();
  const clearRef = useRef();
  const uiCtx = useContext(UIContext);
  const [wishlist, setWishlist] = useState([]);
  const { isAuthenticated, user } = useAuth0();

  function closeButtonHandler() {
    bgRef.current.style.display = "none";
    clearRef.current.style.display = "none";
  }

  const getWishlist = useCallback(async () => {
    if (isAuthenticated) {
      const res = await fetch("http://localhost:5000/wishlist");
      const data = await res.json();

      setWishlist(data.filter((filtered) => filtered.userName === user.name));
    }
  }, [user, isAuthenticated]);

  useEffect(() => {
    getWishlist();
  }, [getWishlist]);

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

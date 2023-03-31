import React, { useEffect, useContext } from "react";

import { useSelector } from "react-redux";

import UIContext from "../../context/ui-context";
import CartForm from "./CartForm";
import gsap from "gsap";

const CartContent = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const uiCtx = useContext(UIContext);

  useEffect(() => {
    if (uiCtx.cartIsActive) {
      props.cartRef.current.style.transform = "translateX(0%)";
      gsap.to(".backdrop--cart", {
        opacity: 1,
        display: "block",
        visibility: "visible",
        ease: "Expo.easeInOut",
      });
      gsap.to("body", {
        overflow: "hidden",
      });
    } else {
      gsap.to(".backdrop--cart", {
        opacity: 0,
        display: "none",
        ease: "Expo.easeInOut",
      });
      // gsap.to("body", {
      //   overflow: "visible",
      // });
    }
  }, [uiCtx, props]);

  function closeButtonHandler() {
    document.body.style.overflow = "visible";
    uiCtx.toggleCart();
    props.cartRef.current.style.transform = "translateX(100%)";
  }
  return (
    <div className="cart__content">
      <div className="cart__content--header">
        <span className="cart__content--bag uppercase">Your Bag</span>
        <span
          onClick={closeButtonHandler}
          className="cart__content--close uppercase"
        >
          Close
        </span>
      </div>
      {totalQuantity === 0 && (
        <span className="cart__content--empty">Your Bag is empty</span>
      )}
      <CartForm />
    </div>
  );
};

export default CartContent;

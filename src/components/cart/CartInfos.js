import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../UI/Button";

import UIContext from "../../context/ui-context";

import gsap from "gsap";

const CartInfos = () => {
  const uiCtx = useContext(UIContext);
  const continueShopStatic = useRef();
  const continueShopHover = useRef();

  const checkoutStatic = useRef();
  const checkoutHover = useRef();

  function toggleMenuHandler() {
    uiCtx.toggleCart();
    const cart = document.querySelector(".cart");
    cart.style.transform = "translateX(100%)";

    gsap.to(".backdrop--cart", {
      opacity: 0,
      display: "none",
      ease: "Expo.easeInOut",
    });
    gsap.to("body", {
      overflow: "visible",
    });
  }

  return (
    <div className="cart__infos">
      <div className="cart__totalPrice uppercase">
        <span>Grand Total INCL. VAT</span>
        <span>R 11,795.00</span>
      </div>
      <div className="cart__buttons">
        <Button
          onClick={toggleMenuHandler}
          onMouseEnter={() => {
            continueShopStatic.current.style.display = "none";
            continueShopHover.current.style.display = "inline-block";
          }}
          onMouseLeave={() => {
            continueShopStatic.current.style.display = "inline-block";
            continueShopHover.current.style.display = "none";
          }}
          className="btn-hover cart__button cart__button--continue"
        >
          <span ref={continueShopStatic} className="static">
            Continue shopping
          </span>
          <span ref={continueShopHover} className="hover">
            Continue shopping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue
            shopping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </Button>
        <Link
          onClick={toggleMenuHandler}
          to="/checkouts"
          onMouseEnter={() => {
            checkoutStatic.current.style.display = "none";
            checkoutHover.current.style.display = "inline-block";
          }}
          onMouseLeave={() => {
            checkoutStatic.current.style.display = "inline-block";
            checkoutHover.current.style.display = "none";
          }}
          className="btn-hover cart__button cart__button--payment"
        >
          <span ref={checkoutStatic} className="static">
            Proceed to Checkout
          </span>
          <span ref={checkoutHover} className="hover">
            Proceed to Checkout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proceed to
            Checkout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CartInfos;

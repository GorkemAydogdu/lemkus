import React, { useRef } from "react";

import Button from "../UI/Button";

const CartInfos = () => {
  const continueShopStatic = useRef();
  const continueShopHover = useRef();

  const checkoutStatic = useRef();
  const checkoutHover = useRef();
  return (
    <div className="cart__infos">
      <div className="cart__totalPrice uppercase">
        <span>Grand Total INCL. VAT</span>
        <span>R 11,795.00</span>
      </div>
      <div className="cart__buttons">
        <a
          onMouseEnter={() => {
            continueShopStatic.current.style.display = "none";
            continueShopHover.current.style.display = "inline-block";
          }}
          onMouseLeave={() => {
            continueShopStatic.current.style.display = "inline-block";
            continueShopHover.current.style.display = "none";
          }}
          href="/"
          className="btn-hover cart__button cart__button--continue"
        >
          <span ref={continueShopStatic} className="static">
            Continue shopping
          </span>
          <span ref={continueShopHover} className="hover">
            Continue shopping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue
            shopping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </a>
        <Button
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
        </Button>
      </div>
    </div>
  );
};

export default CartInfos;

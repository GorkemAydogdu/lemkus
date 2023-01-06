import React, { useEffect, useContext } from "react";

import UIContext from "../../context/ui-context";
import CartForm from "./CartForm";

const CartContent = (props) => {
  const uiCtx = useContext(UIContext);

  useEffect(() => {
    if (uiCtx.cartIsActive) {
      props.cartRef.current.style.transform = "translateX(0%)";
    }
  }, [uiCtx, props]);

  function closeButtonHandler() {
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
      <span className="cart__content--empty">Your Bag is empty</span>
      <CartForm />
    </div>
  );
};

export default CartContent;

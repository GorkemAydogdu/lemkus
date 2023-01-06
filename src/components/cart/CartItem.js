import React from "react";

const CartItem = (props) => {
  return <li className="cart__item">{props.children}</li>;
};

export default CartItem;

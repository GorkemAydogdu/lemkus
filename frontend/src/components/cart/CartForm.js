import React from "react";

import CartItem from "./CartItem";
import CartInfos from "./CartInfos";
import Button from "../UI/Button";
import { ReactComponent as X } from "../../assets/x.svg";

const CartForm = () => {
  return (
    <div className="cart__form">
      <ul className="cart__items">
        <CartItem className="cart__item">
          <img
            className="cart__item--image"
            src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DC9836-200-1.png?v=1667811347"
            alt=""
          />
          <a href="/" className="cart__item--title uppercase">
            Air Jordan 1 Elevate High (W)
          </a>
          <p className="cart__item--size">
            Size: <span>8</span>
          </p>
          <Button className="cart__item--remove">
            <X />
          </Button>
          <span className="cart__item--price">R 2,499.00</span>
          <div className="cart__item--amount">
            <Button>-</Button>
            <span>1</span>
            <Button>+</Button>
          </div>
        </CartItem>
      </ul>
      <CartInfos />
    </div>
  );
};

export default CartForm;

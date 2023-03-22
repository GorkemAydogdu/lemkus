import React from "react";

const CartShopItem = ({ image, logo, name, price }) => {
  return (
    <li className="splide__slide cart__shop--item">
      <a href="/" className="cart__shop--image">
        <div className="cart__shop--logo">
          <img src={logo} alt={name} />
        </div>
        <img src={image} alt={name} />
      </a>
      <div className="cart__shop--infos">
        <a href="/" className="cart__shop--title">
          {name}
        </a>
        <span className="cart__shop--price">R {price}</span>
      </div>
    </li>
  );
};

export default CartShopItem;

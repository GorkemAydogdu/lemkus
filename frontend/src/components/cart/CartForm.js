import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import CartInfos from "./CartInfos";

const CartForm = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="cart__form">
      <ul className="cart__items">
        {cartItems.map((item) => (
          <CartItem
            key={Math.random()}
            item={{
              _id: item._id,
              name: item.name,
              clickedSize: item.clickedSize,
              quantity: item.quantity,
              price: item.price,
              totalPrice: item.totalPrice,
              images: item.images,
            }}
          />
        ))}
      </ul>
      {totalQuantity !== 0 && <CartInfos />}
    </div>
  );
};

export default CartForm;

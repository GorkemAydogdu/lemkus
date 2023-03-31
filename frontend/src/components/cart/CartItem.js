import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";

import Button from "../UI/Button";
import { ReactComponent as X } from "../../assets/x.svg";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { name, clickedSize, quantity, price, totalPrice, images, _id } =
    props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart({ _id, clickedSize }));
  };

  const removeAllItemHandler = () => {
    dispatch(cartActions.removeAllItemFromCart({ _id, quantity, clickedSize }));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        name,
        clickedSize,
        images,
        price,
        totalPrice,
        _id,
      })
    );
  };
  return (
    <li className="cart__item">
      {images.slice(0, 1).map((image) => (
        <img
          key={image.id}
          className="cart__item--image"
          src={image.url}
          alt={name}
        />
      ))}
      <a href="/" className="cart__item--title uppercase">
        {name}
      </a>
      <p className="cart__item--size">
        Size: <span>{clickedSize}</span>
      </p>
      <Button onClick={removeAllItemHandler} className="cart__item--remove">
        <X />
      </Button>
      <span className="cart__item--price">R {price}</span>
      <div className="cart__item--amount">
        <Button onClick={removeItemHandler}>-</Button>
        <span>{quantity}</span>
        <Button onClick={addItemHandler}>+</Button>
      </div>
    </li>
  );
};

export default CartItem;

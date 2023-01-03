import React from "react";

import Button from "../UI/Button";
import { ReactComponent as X } from "../../assets/x.svg";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__shop">ZORT</div>
      <div className="cart__content">
        <div className="cart__content--header">
          <span className="cart__content--bag uppercase">Your Bag</span>
          <span className="cart__content--close uppercase">Close</span>
        </div>
        <span className="cart__content--empty">Your Bag is empty</span>
        <div className="cart__form">
          <ul className="cart__items">
            <li className="cart__item">
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
            </li>
            <li className="cart__item">
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
            </li>
            <li className="cart__item">
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
            </li>
            <li className="cart__item">
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
            </li>
            <li className="cart__item">
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
            </li>
            <li className="cart__item">
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
            </li>
          </ul>
          <div className="cart__infos">
            <div className="cart__totalPrice uppercase">
              <span>Grand Total INCL. VAT</span>
              <span>R 11,795.00</span>
            </div>
            <div className="cart__buttons">
              <a
                href="/"
                className="btn-hover cart__button cart__button--continue"
              >
                <span className="static">Continue shopping</span>
                <span className="hover">
                  Continue shopping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue
                  shopping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </a>
              <Button className="btn-hover cart__button cart__button--payment">
                <span className="static">Proceed to Checkout</span>
                <span className="hover">
                  Proceed to Checkout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proceed
                  to Checkout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

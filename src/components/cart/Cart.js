import React, { useRef, useEffect, useContext } from "react";

import UIContext from "../../context/ui-context";

import Button from "../UI/Button";
import { ReactComponent as X } from "../../assets/x.svg";

const Cart = () => {
  const continueShopStatic = useRef();
  const continueShopHover = useRef();

  const checkoutStatic = useRef();
  const checkoutHover = useRef();

  const cartRef = useRef();

  const uiCtx = useContext(UIContext);

  useEffect(() => {
    if (uiCtx.cartIsActive) {
      cartRef.current.style.transform = "translateX(0%)";
    }
  });

  function closeButtonHandler() {
    uiCtx.toggleCart();
    cartRef.current.style.transform = "translateX(100%)";
  }

  return (
    <div ref={cartRef} className="cart">
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
                  Proceed to Checkout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proceed
                  to Checkout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart__shop">ZORT</div>
    </div>
  );
};

export default Cart;

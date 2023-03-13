import React, { useState, useMemo } from "react";

import Select from "react-select";
import countryList from "react-select-country-list";

import { Link } from "react-router-dom";

import Button from "../components/UI/Button";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Ship } from "../assets/local_shipping.svg";
import { ReactComponent as PickUp } from "../assets/shop.svg";
import { ReactComponent as Checkmark } from "../assets/checkmark.svg";
import { ReactComponent as LeftArrow } from "../assets/keyboard_arrow_left.svg";

const Payment = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="payment">
      <div className="payment__information">
        <div className="payment__information--wrapper">
          <Link to="/" className="payment__logo">
            <Logo />
          </Link>
          <section className="payment__info">
            <div className="d-flex jc-spaceBetween">
              <h3 className="payment__title">Contact information</h3>
              <span className="payment__account">
                Already have an account? <Link to="/account/login">Log in</Link>
              </span>
            </div>
            <input
              type="email"
              className="payment__input"
              placeholder="Email"
            />
            <div className="payment__checkbox payment__checkbox--checked">
              <input
                type="checkbox"
                id="emailCheckbox"
                className="payment__customCheckbox"
              />
              <span className="payment__checkmark">
                <Checkmark />
              </span>
              <label htmlFor="emailCheckbox">
                Email me with news and offers
              </label>
            </div>
          </section>
          <section className="payment__info">
            <h3 className="payment__title">Delivery method</h3>
            <div className="payment__deliveryWrapper">
              <label
                htmlFor="ship"
                className="payment__method payment__method--checked"
              >
                <div className="d-flex">
                  <input
                    type="radio"
                    className="payment__radio"
                    id="ship"
                    name="deliveryMethod"
                  />
                  <div className="payment__method--name">
                    <Ship />
                    <span>Ship</span>
                  </div>
                </div>
              </label>
              <label htmlFor="pickUp" className="payment__method">
                <div className="d-flex">
                  <input
                    type="radio"
                    className="payment__radio"
                    id="pickUp"
                    name="deliveryMethod"
                  />
                  <div className="payment__method--name">
                    <PickUp />
                    <span>Pick Up</span>
                  </div>
                </div>
              </label>
            </div>
          </section>
          <section className="payment__info">
            <h3 className="payment__title">Shipping address</h3>
            <Select
              /*https://stackoverflow.com/a/68468530*/
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  marginTop: "1.2rem",
                  fontSize: "1.4rem",
                  boxShadow: state.isFocused ? "0 0 0 1px black" : "none",
                  "&:hover": {
                    borderColor: "none",
                  },
                  borderColor: state.isFocused ? "black" : "rgb(229, 213, 151)",
                }),
              }}
              options={options}
              value={value}
              onChange={changeHandler}
            />
            <div className="payment__group">
              <input
                type="text"
                className="payment__input"
                placeholder="First name"
              />
              <input
                type="text"
                className="payment__input"
                placeholder="Last name"
              />
            </div>
            <input
              type="text"
              className="payment__input"
              placeholder="Address"
            />
            <input
              type="text"
              className="payment__input"
              placeholder="Apartment, suite,etc. (optional)"
            />
            <input type="text" className="payment__input" placeholder="City" />
            <input
              type="number"
              className="payment__input"
              placeholder="Phone"
            />
            <div className="payment__checkbox payment__checkbox--checked">
              <input
                type="checkbox"
                id="saveInfoCheckbox"
                className="payment__customCheckbox"
              />
              <span className="payment__checkmark">
                <Checkmark />
              </span>
              <label htmlFor="saveInfoCheckbox">
                Save this information for next time
              </label>
            </div>
          </section>
          <section className="payment__action">
            <Link className="payment__returnCart" to="/">
              <LeftArrow />
              Return to cart
            </Link>
            <Button className="payment__continueShipping">
              Continue to shipping
            </Button>
          </section>
          <footer className="payment__footer">
            <ul className="payment__list">
              <li className="payment__item">Refund policy</li>
              <li className="payment__item">Shipping policy</li>
              <li className="payment__item">Privacy policy</li>
              <li className="payment__item">Terms of service</li>
            </ul>
          </footer>
        </div>
      </div>
      <div className="payment__product">
        <div className="payment__product--wrapper">
          <ul className="payment__productList">
            <li className="payment__productItem">
              <div className="payment__imageGroup">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CJ3906-016-1.png?v=1676711338"
                  alt=""
                />
                <span>1</span>
              </div>
              <div className="payment__productInfos">
                <p className="payment__productTitle">Air Max 95 Recraft (GS)</p>
                <span className="payment__productSize">4</span>
              </div>
              <span className="payment__productPrice">R2,599.00</span>
            </li>
            <li className="payment__productItem">
              <div className="payment__imageGroup">
                <img
                  src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CJ3906-016-1.png?v=1676711338"
                  alt=""
                />
                <span>1</span>
              </div>
              <div className="payment__productInfos">
                <p className="payment__productTitle">Air Max 95 Recraft (GS)</p>
                <span className="payment__productSize">4</span>
              </div>
              <span className="payment__productPrice">R2,599.00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;

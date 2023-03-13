import React, { useState, useMemo } from "react";

import Select from "react-select";
import countryList from "react-select-country-list";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Ship } from "../assets/local_shipping.svg";
import { ReactComponent as PickUp } from "../assets/shop.svg";

const Payment = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <div className="payment">
      <div className="payment__information">
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
          <input type="email" className="payment__input" placeholder="Email" />
          <input
            type="checkbox"
            className="payment__checkbox"
            id="emailCheckbox"
          />
          <label htmlFor="emailCheckbox">Email me with news and offers</label>
        </section>
        <section className="payment__info">
          <h3 className="payment__title">Delivery method</h3>
          <div className="payment__deliveryWrapper">
            <label htmlFor="ship" className="payment__method">
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
          <Select options={options} value={value} onChange={changeHandler} />
        </section>
      </div>
      <div className="payment__product"></div>
    </div>
  );
};

export default Payment;

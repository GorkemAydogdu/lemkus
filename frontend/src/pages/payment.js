import React, { useState, useMemo, useEffect } from "react";

import Cards from "react-credit-cards-2";
import "react-credit-cards-2/lib/styles.scss";

import { useSelector } from "react-redux";

import Select from "react-select";
import countryList from "react-select-country-list";

import { Link, useLocation } from "react-router-dom";

import Button from "../components/UI/Button";

import { ReactComponent as Logo } from "../assets/logo.svg";

import { ReactComponent as Checkmark } from "../assets/checkmark.svg";
import { ReactComponent as LeftArrow } from "../assets/keyboard_arrow_left.svg";
import { ReactComponent as X } from "../assets/x.svg";

const Payment = () => {
  const [value, setValue] = useState("");
  const [card, setCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  const options = useMemo(() => countryList().getData(), []);

  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.items);
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].totalPrice;
  }
  const changeHandler = (value) => {
    setValue(value);
  };

  const closeButtonHandler = () => {
    let popups = document.querySelectorAll(".payment__popup");
    popups.forEach((popup) => {
      if (popup.classList.contains("payment__popup--active")) {
        popup.classList.remove("payment__popup--active");
      }
    });
    let backdrop = document.querySelector(".payment__backdrop");
    backdrop.style.display = "none";
  };

  const handleInputFocus = (e) => {
    setCard((prev) => ({ ...prev, focus: e.target.name }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCard((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    let methods = document.querySelectorAll(".payment__method");
    methods.forEach((method) => {
      method.addEventListener("click", handleClick);
    });

    function handleClick() {
      methods.forEach((method) =>
        method.classList.remove("payment__method--checked")
      );
      this.classList.add("payment__method--checked");
    }
  }, []);

  return (
    <>
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
                  Already have an account?{" "}
                  <Link to="/account/login">Log in</Link>
                </span>
              </div>
              <input
                type="email"
                className="payment__input"
                placeholder="Email"
              />
              <div
                onClick={(event) => {
                  event.currentTarget.classList.toggle(
                    "payment__checkbox--checked"
                  );
                }}
                className="payment__checkbox"
              >
                <input type="checkbox" className="payment__customCheckbox" />
                <span className="payment__checkmark">
                  <Checkmark />
                </span>
                <label>Email me with news and offers</label>
              </div>
            </section>
            <section className="payment__info">
              <h3 className="payment__title">Payment</h3>

              <Cards
                cvc={card.cvc}
                expiry={card.expiry}
                focused={card.focus}
                name={card.name}
                number={card.number}
              />
              <input
                className="payment__input"
                type="number"
                name="number"
                placeholder="Card Number"
                value={card.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                className="payment__input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={card.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                className="payment__input"
                type="text"
                name="expiry"
                placeholder="Date"
                value={card.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                className="payment__input"
                type="number"
                name="cvc"
                placeholder="Cvc"
                value={card.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />

              {/* <div className="payment__deliveryWrapper">
                <div id="ship" className="payment__method">
                  <input type="radio" className="payment__radio" />
                  <div className="payment__method--name">
                    <Ship />
                    <span>Ship</span>
                  </div>
                </div>
                <div id="pickUp" className="payment__method">
                  <input type="radio" className="payment__radio" />
                  <div className="payment__method--name">
                    <PickUp />
                    <span>Pick Up</span>
                  </div>
                </div>
              </div> */}
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
                    borderColor: state.isFocused
                      ? "black"
                      : "rgb(229, 213, 151)",

                    "@media only screen and (max-width: 1024px)": {
                      fontSize: "1.8rem",
                    },
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize: "1.4rem",
                    "@media only screen and (max-width: 1024px)": {
                      fontSize: "1.8rem",
                    },
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
              <input
                type="text"
                className="payment__input"
                placeholder="City"
              />
              <input
                type="number"
                className="payment__input"
                placeholder="Phone"
              />
              <div
                onClick={(event) => {
                  event.currentTarget.classList.toggle(
                    "payment__checkbox--checked"
                  );
                }}
                className="payment__checkbox"
              >
                <input type="checkbox" className="payment__customCheckbox" />
                <span className="payment__checkmark">
                  <Checkmark />
                </span>
                <label>Save this information for next time</label>
              </div>
            </section>
            <section className="payment__action">
              <Link className="payment__returnCart" to="/">
                <LeftArrow />
                Return to cart
              </Link>
              <Button className="payment__continueShipping">Payment</Button>
            </section>
            <footer className="payment__footer">
              <ul className="payment__list">
                <li
                  onClick={() => {
                    let backdrop = document.querySelector(".payment__backdrop");
                    let refundEl = document.querySelector(".payment__refund");
                    refundEl.classList.add("payment__popup--active");
                    backdrop.style.display = "block";
                  }}
                  className="payment__item"
                >
                  Refund policy
                </li>
                <li
                  onClick={() => {
                    let backdrop = document.querySelector(".payment__backdrop");
                    let shippingEl =
                      document.querySelector(".payment__shipping");
                    shippingEl.classList.add("payment__popup--active");
                    backdrop.style.display = "block";
                  }}
                  className="payment__item"
                >
                  Shipping policy
                </li>
                <li
                  onClick={() => {
                    let backdrop = document.querySelector(".payment__backdrop");
                    let privacyEl = document.querySelector(".payment__privacy");
                    privacyEl.classList.add("payment__popup--active");
                    backdrop.style.display = "block";
                  }}
                  className="payment__item"
                >
                  Privacy policy
                </li>
                <li
                  onClick={() => {
                    let backdrop = document.querySelector(".payment__backdrop");
                    let termsEl = document.querySelector(".payment__terms");
                    termsEl.classList.add("payment__popup--active");
                    backdrop.style.display = "block";
                  }}
                  className="payment__item"
                >
                  Terms of service
                </li>
              </ul>
            </footer>
          </div>
        </div>
        <div className="payment__product">
          <div className="payment__product--wrapper">
            <ul className="payment__productList">
              {cartItems.map((item) => (
                <li className="payment__productItem">
                  <div className="payment__imageGroup">
                    <img src={item.images[0].url} alt={item.name} />
                    <span>{item.quantity}</span>
                  </div>
                  <div className="payment__productInfos">
                    <p className="payment__productTitle">{item.name}</p>
                    <span className="payment__productSize">
                      {item.clickedSize}
                    </span>
                  </div>
                  <span className="payment__productPrice">R{item.price}</span>
                </li>
              ))}
            </ul>
            <section className="payment__discount">
              <input
                type="text"
                className="payment__input"
                placeholder="Discount code"
              />
              <Button className="payment__apply">Apply</Button>
            </section>
            <section className="payment__totalPrice">
              <div className="payment__totalPrice--wrapper">
                <span>Subtotal</span>
                <span className="payment__totalPrice--subtotal">
                  R{totalPrice}
                </span>
              </div>
              <div className="payment__totalPrice--wrapper">
                <span>Shipping</span>
                <span className="payment__totalPrice--shipping">0</span>
              </div>
              <div className="payment__totalPrice--wrapper">
                <span>Total</span>
                <span className="payment__totalPrice--total">
                  R{totalPrice}
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>

      {location.pathname === "/checkouts" && (
        <div
          onClick={(event) => {
            let popups = document.querySelectorAll(".payment__popup");
            popups.forEach((popup) => {
              if (popup.classList.contains("payment__popup--active")) {
                popup.classList.remove("payment__popup--active");
              }
            });
            event.target.style.display = "none";
          }}
          className="payment__backdrop"
        ></div>
      )}
      {location.pathname === "/checkouts" && (
        <div className="payment__popup payment__refund">
          <header>
            <h3>Refund Policy</h3>
            <Button onClick={closeButtonHandler}>
              <X />
            </Button>
          </header>
          <main>
            <h1>RETURNS & REPLACEMENTS</h1>
            <ul>
              <li>
                We must wait for the returning product to get back to us before
                exchanging/refunding and the goods must be undamaged/unworn with
                all the relevant packaging still intact/undamaged, please
                understand how important this is.
              </li>
              <li>
                We Offer 1 Free return on all orders Except Sale Items. If you
                are wanting a second return we will have to charge for it.
                Returning for an exchange is R75, returning for a refund is R50.
                We do not do returns on Caps/Watches and Sale items Last Pairs &
                Sale Clothing.
              </li>
              <li>
                If you have selected 'Collect in store' and then want a product
                returned to us for a refund, we will have to charge for the
                courier fee, R100, this can be taken off amount refunded
              </li>
              <li>
                If an item sent to you is the wrong size/item then we will get
                it returned to us using express and your follow up delivery will
                also be express. Credit Card Refunds take up to anywhere from
                7-10 working days by law.
              </li>
              <li>
                EFT refunds can take up to 2 days to be visible in customers
                account (Depending on Bank).
              </li>
              <li>
                Direct Deposit Refunds will be processed within 30 minutes of
                product returning.
              </li>
              <li>The courier will supply a flyer bag when collecting.</li>
              <li>
                Returns and refunds must be enacted within 30 Days of receiving
                goods.
              </li>
              <li>
                Please note we CANNOT refund you unless you have a working bank
                account
              </li>
              <li>Customer are refunded the same way they Paid.</li>
            </ul>
          </main>
        </div>
      )}
      {location.pathname === "/checkouts" && (
        <div className="payment__popup payment__shipping">
          <header>
            <h3>Shipping Policy</h3>
            <Button onClick={closeButtonHandler}>
              <X />
            </Button>
          </header>
          <main>
            <h1>SHIPPING & DELIVERY</h1>
            <p>
              Please Note: Nike product is not available for International
              Shipping Due to contractual agreements within South Africa.
            </p>
            <p>
              Jacklemkus.com uses only the best courier companies when
              delivering your product. Please see below the different options
              you have on how to receive your product, please also see a brief
              terms and conditions section around delivery.
            </p>
            <span>Free delivery option</span>
            <ul>
              <li>Delivery is Free everywhere in SA</li>
              <li>Main Centres take 2-3 Days</li>
              <li>Regional Areas take 3-5 days.</li>
              <li>
                Under Armour product is NOT kept on site, please note it can
                take 2-5 working days to effect delivery.
              </li>
            </ul>
            <p>
              Collecting in store - Should you wish to skip the sometimes long
              ques in store, you can make your purchase online and come in to
              collect. This would also work if you want to pick up some of our
              best product before it flies off the shelves.
            </p>
            <span>Free delivery option</span>
            <ul>
              <li>Orders can be collected within an hour</li>
              <li>
                Please note if you pay via EFT, you will be sent an email
                letting you know when we have received the payment and after
                such, can come and collect your order.
              </li>
              <li>
                EFT Payment Method: Please note we can not be liable If the
                product you ordered is sold before you email us proof of
                payment, we can keep product aside for 1HOUR Important Points:
                We want to help you have the best e-commerce experience we
                possibly can, please see our very basic terms & conditions
                below:
              </li>
              <li>
                Our trusted courier partners are hand to hand couriers,no P.O
                Box Addresses
              </li>
              <li>
                Courier will try delivery twice, and try to contact you both
                times, please note we only offer Free Delivery when it is
                initially sent out, if the product is returned to us after a
                failed second attempt we will charge you R75 for the next
                attempt.
              </li>
              <li>Cheques are not accepted</li>
              <li>
                The Courier Operates from 8:00AM-17:00PM, Monday to Friday
              </li>
              <li>
                All orders received after 15:30PM will only leave the next
                working day
              </li>
              <li>
                Please make sure someone is present at the address to sign for
                your purchase, if someone will not be present, please use your
                work address, the courier has your contact details!
              </li>
              <li>
                Full amount on order must be paid before effecting delivery.
              </li>
              <li>
                Delivery times do not include Saturdays, Sundays or public
                holidays, and are subject to signature authorisation.
              </li>
              <li>
                Orders with incorrect billing information, or requiring
                additional verification, will be delayed.
              </li>
              <li>Order may be delayed if the following applies:</li>
              <li>
                Customer is not present to receive order delivery is effected
                twice by the courier, if customer is still not present to sign
                for order, it is returned to Jack Lemkus
              </li>
              <li>Address is incorrect on order</li>
              <li>Act of God</li>
            </ul>
          </main>
        </div>
      )}
      {location.pathname === "/checkouts" && (
        <div className="payment__popup payment__privacy">
          <header>
            <h3>Privacy Policy</h3>
            <Button onClick={closeButtonHandler}>
              <X />
            </Button>
          </header>
          <main>
            <h1>PRIVACY POLICY</h1>
            <p>
              This privacy policy sets out how Jack Lemkus uses and protects any
              information that you give Jack Lemkus when you use this website.
              Jack Lemkus is committed to ensuring that your privacy is
              protected. Should we ask you to provide certain information by
              which you can be identified when using this website, then you can
              be assured that it will only be used in accordance with this
              privacy statement. Jack Lemkus may change this policy from time to
              time by updating this page. You should check this page from time
              to time to ensure that you are happy with any changes.
            </p>
            <h1>WHAT WE COLLECT</h1>
            <p>
              We may collect the following information: <br />
              <br />
              Name.
              <br />
              Contact information including email address.
              <br />
              Demographic information such as postcode, preferences and
              interests.
              <br />
              Other information relevant to customer surveys and/or offers.
              <br />
              For the exhaustive list of cookies we collect see the List of
              cookies we collect section.
            </p>
            <h1>WHAT WE DO WITH THE INFORMATION WE GATHER</h1>
            <p>
              We require this information to understand your needs and provide
              you with a better service, and in particular for the following
              reasons:
              <br />
              <br />
              Internal record keeping.
              <br />
              We may use the information to improve our products and services.
              <br />
              We will not provide this information to any third parties or use
              it to contact you without permission.
            </p>
            <h1>SECURITY</h1>
            <p>
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorised access or disclosure, we have put in
              place suitable physical, electronic and managerial procedures to
              safeguard and secure the information we collect online.
            </p>
            <h1>HOW WE USE COOKIES</h1>
            <p>
              A cookie is a small file which asks permission to be placed on
              your computer's hard drive. Once you agree, the file is added and
              the cookie helps analyse web traffic or lets you know when you
              visit a particular site. Cookies allow web applications to respond
              to you as an individual. The web application can tailor its
              operations to your needs, likes and dislikes by gathering and
              remembering information about your preferences.
              <br />
              <br /> We use traffic log cookies to identify which pages are
              being used. This helps us analyse data about web page traffic and
              improve our website in order to tailor it to customer needs. We
              only use this information for statistical analysis purposes and
              then the data is removed from the system.
              <br />
              <br />
              Overall, cookies help us provide you with a better website, by
              enabling us to monitor which pages you find useful and which you
              do not. A cookie in no way gives us access to your computer or any
              information about you, other than the data you choose to share
              with us. You can choose to accept or decline cookies. Most web
              browsers automatically accept cookies, but you can usually modify
              your browser setting to decline cookies if you prefer. This may
              prevent you from taking full advantage of the website.
            </p>
            <h1>LINKS TO OTHER WEBSITES</h1>
            <p>
              Our website may contain links to other websites of interest.
              However, once you have used these links to leave our site, you
              should note that we do not have any control over that other
              website. Therefore, we cannot be responsible for the protection
              and privacy of any information which you provide whilst visiting
              such sites and such sites are not governed by this privacy
              statement. You should exercise caution and look at the privacy
              statement applicable to the website in question.
            </p>
            <h1>CONTROLLING YOUR PERSONAL INFORMATION</h1>
            <p>
              You may choose to restrict the collection or use of your personal
              information in the following ways:
              <br />
              <br />
              <br />
              Whenever you are asked to fill in a form on the website, look for
              the box that you can click to indicate that you do not want the
              information to be used by anybody for direct marketing purposes if
              you have previously agreed to us using your personal information
              for direct marketing purposes, you may change your mind at any
              time by writing to or emailing us at info@jacklemkus.co.za <br />
              <br />
              We will not sell, distribute or lease your personal information to
              third parties unless we have your permission or are required by
              law to do so. We may use your personal information to send you
              promotional information about third parties which we think you may
              find interesting if you tell us that you wish this to happen.{" "}
              <br />
              <br /> You may request details of personal information which we
              hold about you under the Data Protection Act 1998. A small fee
              will be payable. If you would like a copy of the information held
              on you please write to 26 St Georges Mall Cape Town CBD South
              Africa or info@jacklemkus.co.za.
              <br />
              <br />
              If you believe that any information we are holding on you is
              incorrect or incomplete, please write to or email us as soon as
              possible, at the above address. We will promptly correct any
              information found to be incorrect.
            </p>
            <h1>COMPLYING WITH THE POPI ACT</h1>
            <p>
              <br />
              What is the POPI Act?
              <br />
              <br />
              POPI stands for Protection of Personal Information Act and has
              come into effect as of 1st of July 2021.
              <br />
              <br />
              What is Lemkus doing to Comply?
              <br />
              <br />
              Jack Lemkus does not keep customers personal information unless
              given the customers permission, all relevant customer information
              including name used on order, address, and contact number are used
              for delivery purposesonly.
              <br />
              <br />
              Newsletter subscriptions at customer's request, delivery details
              needed to effect delivery at customers consent.
              <br />
              <br />
              Lemkus.com uses Shopify as its Web Software, please note Shopify
              has built in security protocols, please see their Privacy Policy
              here:
              <br />
              <br />
              https://www.shopify.com/legal/privacy
            </p>
          </main>
        </div>
      )}
      {location.pathname === "/checkouts" && (
        <div className="payment__popup payment__terms">
          <header>
            <h3>Terms of service</h3>
            <Button onClick={closeButtonHandler}>
              <X />
            </Button>
          </header>
          <main>
            <h1>SHIPPING & DELIVERY</h1>
            <p>
              Please Note: Nike product is not available for International
              Shipping Due to contractual agreements within South Africa.
            </p>
            <p>
              Jacklemkus.com uses only the best courier companies when
              delivering your product. Please see below the different options
              you have on how to receive your product, please also see a brief
              terms and conditions section around delivery.
            </p>
            <span>Free delivery option</span>
            <ul>
              <li>Delivery is Free everywhere in SA</li>
              <li>Main Centres take 2-3 Days</li>
              <li>Regional Areas take 3-5 days.</li>
              <li>
                Under Armour product is NOT kept on site, please note it can
                take 2-5 working days to effect delivery.
              </li>
            </ul>
            <p>
              Collecting in store - Should you wish to skip the sometimes long
              ques in store, you can make your purchase online and come in to
              collect. This would also work if you want to pick up some of our
              best product before it flies off the shelves.
            </p>
            <span>Free delivery option</span>
            <ul>
              <li>Orders can be collected within an hour</li>
              <li>
                Please note if you pay via EFT, you will be sent an email
                letting you know when we have received the payment and after
                such, can come and collect your order.
              </li>
              <li>
                EFT Payment Method: Please note we can not be liable If the
                product you ordered is sold before you email us proof of
                payment, we can keep product aside for 1HOUR Important Points:
                We want to help you have the best e-commerce experience we
                possibly can, please see our very basic terms & conditions
                below:
              </li>
              <li>
                Our trusted courier partners are hand to hand couriers,no P.O
                Box Addresses
              </li>
              <li>
                Courier will try delivery twice, and try to contact you both
                times, please note we only offer Free Delivery when it is
                initially sent out, if the product is returned to us after a
                failed second attempt we will charge you R75 for the next
                attempt.
              </li>
              <li>Cheques are not accepted</li>
              <li>
                The Courier Operates from 8:00AM-17:00PM, Monday to Friday
              </li>
              <li>
                All orders received after 15:30PM will only leave the next
                working day
              </li>
              <li>
                Please make sure someone is present at the address to sign for
                your purchase, if someone will not be present, please use your
                work address, the courier has your contact details!
              </li>
              <li>
                Full amount on order must be paid before effecting delivery.
              </li>
              <li>
                Delivery times do not include Saturdays, Sundays or public
                holidays, and are subject to signature authorisation.
              </li>
              <li>
                Orders with incorrect billing information, or requiring
                additional verification, will be delayed.
              </li>
              <li>Order may be delayed if the following applies:</li>
              <li>
                Customer is not present to receive order delivery is effected
                twice by the courier, if customer is still not present to sign
                for order, it is returned to Jack Lemkus
              </li>
              <li>Address is incorrect on order</li>
              <li>Act of God</li>
            </ul>
            <h1>PRIVACY & SECURITY</h1>
            <span>See Privacy Policy</span>
            <h1>RETURNS & REPLACEMENTS</h1>
            <ul>
              <li>
                We must wait for the returning product to get back to us before
                exchanging/refunding and the goods must be undamaged/unworn with
                all the relevant packaging still intact/undamaged, please
                understand how important this is.
              </li>
              <li>
                We Offer 1 Free return on all orders Except Sale Items. If you
                are wanting a second return we will have to charge for it.
                Returning for an exchange is R75, returning for a refund is R50.
                We do not do returns on Caps/Watches and Sale items Last Pairs &
                Sale Clothing.
              </li>
              <li>
                If you have selected 'Collect in store' and then want a product
                returned to us for a refund, we will have to charge for the
                courier fee, R100, this can be taken off amount refunded
              </li>
              <li>
                If an item sent to you is the wrong size/item then we will get
                it returned to us using express and your follow up delivery will
                also be express. Credit Card Refunds take up to anywhere from
                7-10 working days by law.
              </li>
              <li>
                EFT refunds can take up to 2 days to be visible in customers
                account (Depending on Bank).
              </li>
              <li>
                Direct Deposit Refunds will be processed within 30 minutes of
                product returning.
              </li>
              <li>The courier will supply a flyer bag when collecting.</li>
              <li>
                Returns and refunds must be enacted within 30 Days of receiving
                goods.
              </li>
              <li>
                Please note we CANNOT refund you unless you have a working bank
                account
              </li>
              <li>Customer are refunded the same way they Paid.</li>
            </ul>
            <h1>ORDERING</h1>
            <ul>
              <li>
                Select a category that you are looking to purchase product from.
              </li>
              <li>
                Within the category you’ll find a range of products on offer.
              </li>
              <li>
                Once you choose a product you’ll be taken to the product review
                page for a more detailed description along with pictures and
                reviews to help you make you choice, we understand every
                purchase is a big decision so we will try to equip you with as
                much information as possible.
              </li>
              <li>
                Select quantity, size and “add to your cart”. You will be taken
                to your cart confirming the addition and from here you can
                choose to continue shopping or checkout.
              </li>
              <li>
                In checkout we’ll give you the opportunity to review your cart.
              </li>
              <li>
                From here you can enter your delivery and billing addresses (if
                you’re a first time buyer) or go straight to the payment page
                (if you’ve bought before).
              </li>
            </ul>
            <h1>PAYMENT, PRICING & PROMOTIONS</h1>
            <ul>
              <li>
                EFT/DIRECT DEPOSIT - Only once we have received your money into
                our account will we send your product to you. This will take one
                day if you bank with Nedbank and 2 days with any other bank.
              </li>
              <li>
                CREDIT CARD: VISA AND MASTERCARD - Your order will be sent
                immediately, please note that you will have to have a card that
                has been 3D activated, if you have a new card this should
                automatically be done, if not you will have to go and activate
                this at your nearest bank branch.
              </li>
            </ul>
            <p>
              Don't be nervous about 3D secure, it does a brilliant job of
              helping us all to have a more secure and fraud free e-commerce
              experience.
            </p>
            <h1>HOW CAN I REGISTER / ACTIVATE FOR 3D SECURE?</h1>
            <p>
              ABSA - ABSA cardholders do not need to register or activate 3D
              Secure. Proceed to Checkout and follow the prompts.
              <br />
              <br />
              Standard Bank - Standard Bank cardholders do not need to register
              or activate 3D Secure. Proceed to checkout and follow the prompts.
              <br />
              <br />
              FNB - FNB cardholders must register and activate 3D Secure. Please
              follow the steps below to Register your card for 3D Secure:
              <br />
              <br />
              Login to your Online Banking Profile
              <br />
              Select 'My Bank Accounts'
              <br />
              Select the My Cards Tab <br /> Find the Card you are wanting to
              activate for 3D Secure
              <br /> Click "Activate now"
              <br /> Complete the required Information
              <br />
              a One time Password will be sent to your phone, enter it when
              prompted
              <br /> You are now activated for 3D Secure, Happy Shopping!
              <br />
              <br />
              Nedbank - Nedbank cardholders do not need to register or activate
              3D Secure.
              <br />
              <br />
              Investec - Investec cardholders must use their credit card pins
              when prompted to submit the One Time Pin (OTP) in the checkout.
              <br />
              <br />
              Capitec - If you've already registered or activated your card for
              3D Secure with Capitec, simply enter your personal SecureCode
              password on the checkout screen. Please go here and follow the
              instructions.
              <br />
              <br />
              SecureCode Customers (MasterCard) (If you bank with an Institution
              other than the above): Please visit the the Securecode website
              here
              <br />
              <br />
              Verified by Visa Customers (VISA): Customers with VISA Cards that
              do not bank with one of the above need no longer register their
              Cards to checkout, please see the Visa website here for further
              explanation
            </p>
            <h1>VIEWING ORDERS</h1>
            <ul>
              <li>Login into your account in the Top Right</li>
              <li>Or create an account</li>
              <li>
                Once logged in, you can view your orders under 'Order History'
              </li>
            </ul>
            <h1>LAY-BY TERMS AND CONDITIONS</h1>
            <ul>
              <li>Lay-byes can only be done IN STORE</li>
              <li>10% Deposit, 3 Months to Pay it off</li>
              <li>No Style changes, Only size changes allowed on a Lay-bye</li>
              <li>
                No refunds, Only credit notes allowed (Credit note can not be
                used to Laybye, only as a Final Payment)
              </li>
              <li>Cancellations: Subject to a 10% cancellation Fee</li>
              <li>
                No Lay-bys will be accepted on Mens sized Air Jordan Retro
                styles.
              </li>
            </ul>
            <h1>UPDATING ACCOUNT INFORMATION</h1>
            <ul>
              <li>See above.</li>
              <li>
                Once logged in you can change your 'account information' and
                update your 'address book'
              </li>
            </ul>
          </main>
        </div>
      )}
    </>
  );
};

export default Payment;

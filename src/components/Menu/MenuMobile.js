import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Button from "../UI/Button";

import gsap from "gsap";

const MenuMobile = (props) => {
  const menuMobileRef = useRef();
  const categoryRef = useRef([]);
  const buttonRef = useRef([]);
  const isActive = useSelector((state) => state.mobile.isActive);

  const clickButtonHandler = (event) => {
    for (let i = 0; i < categoryRef.current.length; i++) {
      if (categoryRef.current[i].className.includes(event.target.innerHTML)) {
        event.target.classList.toggle("menuMobile__button--active");
        if (event.target.className.includes("menuMobile__button--active")) {
          gsap.to(categoryRef.current[i], {
            opacity: 1,
            visibility: "visible",
            height: "auto",
            ease: "expo.inOut",
          });
        } else {
          gsap.to(categoryRef.current[i], {
            opacity: 0,
            visibility: "hidden",
            height: "0",
            ease: "expo.inOut",
          });
        }
      } else {
        gsap.to(categoryRef.current[i], {
          opacity: 0,
          visibility: "hidden",
          height: "0",
          ease: "expo.inOut",
        });
        buttonRef.current[i].classList.remove("menuMobile__button--active");
      }
    }
  };

  useEffect(() => {
    if (isActive && window.innerWidth < 1025) {
      menuMobileRef.current.style.transform = `translateX(0%)`;
      document.body.style.overflow = "hidden";
    } else {
      menuMobileRef.current.style.transform = `translateX(100%)`;
      document.body.style.overflow = "visible";
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        document.body.style.overflow = "visible";
      }
    });
  }, [isActive]);

  let content = props.menu.map((item, idx) => (
    <li key={item.id} className="menuMobile__item">
      <Button
        ref={(el) => (buttonRef.current[idx] = el)}
        onClick={clickButtonHandler}
        className="menuMobile__button"
      >
        {item.name}
      </Button>
      <div
        ref={(el) => (categoryRef.current[idx] = el)}
        className={`menuMobile__categories ${item.name}`}
      >
        {item.links.map((link) => (
          <React.Fragment key={link.id}>
            <span className="menuMobile__title">{link.category}</span>
            <ul className="menuMobile__categoriesList">
              {link.items.map((item) => (
                <li key={item} className="menuMobile__categoriesItem">
                  <a href="/" className="menuMobile__categoriesLink">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </li>
  ));
  return (
    <div ref={menuMobileRef} className="menuMobile">
      <ul className="menuMobile__list">
        <li className="menuMobile__item">
          <a href="/" className="menuMobile__link">
            Home
          </a>
        </li>
        <li className="menuMobile__item">
          <a href="/" className="menuMobile__link">
            Launches
          </a>
        </li>
        {content}
        <li className="menuMobile__item">
          <a href="/" className="menuMobile__link">
            Culture
          </a>
        </li>
        <li className="menuMobile__item">
          <a href="/" className="menuMobile__link">
            Brands
          </a>
        </li>
      </ul>
      <div className="menuMobile__user">
        <a href="/">Account</a>
        <a href="/">Wishlist</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
};

export default MenuMobile;

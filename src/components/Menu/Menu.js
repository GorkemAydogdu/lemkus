import React, { useEffect, useContext } from "react";

import UIContext from "../../context/ui-context";

import ListItem from "../UI/ListItem";
import gsap from "gsap";

const Menu = (props) => {
  const uiCtx = useContext(UIContext);
  useEffect(() => {
    if (props.className.includes("menu--active")) {
      gsap.to(".menu--active", {
        duration: 1,
        ease: "expo.inOut",
        opacity: 1,
        clipPath: "inset(0% 0% 0%)",
      });
      gsap.from(".menu--active .menu__links", {
        duration: 1,
        y: 150,
        ease: "expo.inOut",
      });
      gsap.from(".menu--active .menu__featured", {
        duration: 1,
        y: 150,
        ease: "expo.inOut",
        delay: 0.1,
      });
    } else {
      gsap.to(".menu--close", {
        duration: 0.8,
        ease: "expo.inOut",
        opacity: 0,
        clipPath: "inset(0% 0% 100%)",
      });
    }
  }, [props]);

  return (
    <div
      ref={props.ref}
      className={`${props.className} ${
        uiCtx.isLocationChanged === true ? "dark" : "light"
      }`}
    >
      <div
        className={`menu__links ${
          props.item.links.length === 3 ? "menu__links--width" : ""
        }`}
      >
        {props.item.links.map((link) => (
          <div className={`menu__${link.category.toLowerCase()}`} key={link.id}>
            <h1 className="menu__title">{link.category}</h1>
            <ul className="menu__list">
              {link.items.map((item) => (
                <ListItem key={item} className="menu__item">
                  <a href="/" className="menu__link">
                    {item}
                  </a>
                </ListItem>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {
        <div
          className={`menu__featured ${
            props.item.links.length === 3 ? "menu__featured--width" : ""
          }`}
        >
          <h1 className="menu__title">{props.item.featured.name}</h1>
          <div className="menu__featuredGroup">
            {props.item.featured.items.map((item) => (
              <div className={`menu__featuredItem`} key={item.id}>
                <a href="/" className="menu__featuredLink">
                  <img src={item.image} alt={item.name} />
                </a>
                <a href="/" className="menu__featuredTitle">
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Menu;

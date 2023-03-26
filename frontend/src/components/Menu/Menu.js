import React, { useEffect, useContext } from "react";

import UIContext from "../../context/ui-context";

import gsap from "gsap";
import MenuLinks from "./MenuLinks";
import MenuFeatured from "./MenuFeatured";

const Menu = (props) => {
  const uiCtx = useContext(UIContext);

  console.log(props.item);
  useEffect(() => {
    if (props.className.includes("menu--active")) {
      gsap.to(".backdrop--menu", {
        duration: 1,
        opacity: 1,
        display: "block",
        visibility: "visible",
        ease: "Expo.easeInOut",
      });
      gsap.to("body", {
        overflow: "hidden",
      });
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
      gsap.to(".backdrop--menu", {
        duration: 1,
        opacity: 0,
        display: "none",
        ease: "Expo.easeInOut",
      });
      gsap.to("body", {
        overflow: "visible",
      });
    }
  }, [props, uiCtx]);

  return (
    <div
      ref={props.ref}
      className={`${props.className} ${
        uiCtx.isLocationChanged === true ? "dark" : "light"
      }`}
    >
      <MenuLinks name={props.item.name} links={props.item.links} />
      <MenuFeatured item={props.item} />
    </div>
  );
};

export default Menu;

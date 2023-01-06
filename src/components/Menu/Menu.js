import React, { useEffect, useContext } from "react";

import UIContext from "../../context/ui-context";

import gsap from "gsap";
import MenuLinks from "./MenuLinks";
import MenuFeatured from "./MenuFeatured";

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
      <MenuLinks links={props.item.links} />
      <MenuFeatured item={props.item} />
    </div>
  );
};

export default Menu;

import React, { useEffect, useRef, useContext } from "react";

import MenuMobileUser from "./MenuMobileUser";
import UIContext from "../../context/ui-context";

import Button from "../UI/Button";

import gsap from "gsap";
import { Link } from "react-router-dom";
const tl = gsap.timeline();

const MenuMobile = (props) => {
  const menuMobileRef = useRef();
  const categoryRef = useRef([]);
  const buttonRef = useRef([]);
  const uiCtx = useContext(UIContext);

  const clickButtonHandler = (event) => {
    for (let i = 0; i < categoryRef.current.length; i++) {
      if (categoryRef.current[i].className.includes(event.target.innerHTML)) {
        event.target.classList.toggle("menuMobile__button--active");
        if (event.target.className.includes("menuMobile__button--active")) {
          tl.to(categoryRef.current[i], {
            opacity: 1,
            visibility: "visible",
            height: "auto",
            duration: 0.2,
            ease: "expo.inOut",
          }).to(categoryRef.current[i].children, {
            opacity: 1,
            visibility: "visible",
            height: "auto",
            ease: "expo.inOut",
            delay: 0.1,
          });
        } else {
          gsap.to(categoryRef.current[i], {
            opacity: 0,
            visibility: "hidden",
            height: "0",
            ease: "expo.inOut",
          });
          gsap.to(categoryRef.current[i].children, {
            opacity: 0,
            visibility: "hidden",
            height: "0",
            ease: "expo.inOut",
            delay: 0.1,
          });
        }
      } else {
        gsap.to(categoryRef.current[i], {
          opacity: 0,
          visibility: "hidden",
          height: "0",
          ease: "expo.inOut",
        });
        gsap.to(categoryRef.current[i].children, {
          opacity: 0,
          visibility: "hidden",
          height: "0",
          ease: "expo.inOut",
          delay: 0.1,
        });
        buttonRef.current[i].classList.remove("menuMobile__button--active");
      }
    }
  };

  //Location değiştiğinde menu kapatılacak
  useEffect(() => {
    if (uiCtx.menuIsActive && window.innerWidth < 1025) {
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
  }, [uiCtx]);

  // let content = props.menu.map((item, idx) => (
  //   <li key={item.id} className="menuMobile__item">
  //     <Button
  //       ref={(el) => (buttonRef.current[idx] = el)}
  //       onClick={clickButtonHandler}
  //       className="menuMobile__button"
  //     >
  //       {item.name}
  //     </Button>
  //     <div
  //       ref={(el) => (categoryRef.current[idx] = el)}
  //       className={`menuMobile__categories ${item.name}`}
  //     >
  //       {item.links.map((link) => (
  //         <React.Fragment key={link.id}>
  //           <span className="menuMobile__title">{link.category}</span>
  //           <ul className="menuMobile__categoriesList">
  //             {link.items.map((item) => (
  //               <li key={item.id} className="menuMobile__categoriesItem">
  //                 <Link
  //                   to={`/collections${item.pathname}`}
  //                   className="menuMobile__categoriesLink"
  //                 >
  //                   {item.name}
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         </React.Fragment>
  //       ))}
  //     </div>
  //   </li>
  // ));
  return (
    <div
      ref={menuMobileRef}
      className={`menuMobile ${
        uiCtx.isLocationChanged === true ? "dark" : "light"
      }`}
    >
      <ul className="menuMobile__list">
        <li className="menuMobile__item">
          <Link to="/" className="menuMobile__link">
            Home
          </Link>
        </li>
        <li className="menuMobile__item">
          <Link to="/pages/launches" className="menuMobile__link">
            Launches
          </Link>
        </li>
        {/* {content} */}
        <li className="menuMobile__item">
          <Link to="/blogs/news" className="menuMobile__link">
            Culture
          </Link>
        </li>
        <li className="menuMobile__item">
          <Link to="/pages/brands" className="menuMobile__link">
            Brands
          </Link>
        </li>
      </ul>
      <MenuMobileUser />
    </div>
  );
};

export default MenuMobile;

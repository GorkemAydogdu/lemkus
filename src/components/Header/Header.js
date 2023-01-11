import React, { useEffect, useState, useRef, useContext } from "react";
import { useLocation, Link } from "react-router-dom";

import UIContext from "../../context/ui-context";

//components
import HeaderListItem from "../UI/ListItem";
import HeaderUser from "./HeaderUser";
import HeaderMobile from "./HeaderMobile";
import Button from "../UI/Button";

import { ReactComponent as Logo } from "../../assets/logo.svg";

//gsap
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const Header = (props) => {
  const [locationChanged, setLocationChanged] = useState(false);

  const location = useLocation();
  const headerRef = useRef();
  const [time, setTime] = useState(new Date().toLocaleTimeString("tr-TR"));

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const uiCtx = useContext(UIContext);

  useEffect(() => {
    //pathname if ile kontrol edilecek eğer pathname / eşit değilse setState true olacak ve logo show olacak

    if (location.pathname !== "/") {
      setLocationChanged(true);
    } else {
      setLocationChanged(false);
    }

    gsap.fromTo(
      ".logo",
      {
        top: "7rem",
        width: "100%",
      },
      {
        top: "2rem",
        width: "13%",
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: ".header",
          start: "top",
          end: "top top",
          endTrigger: ".banner",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".header__time",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".header",
          start: "top",
          end: "top 57px",
          endTrigger: ".banner",
          scrub: 2,
        },
      }
    );

    //https://greensock.com/forums/topic/22491-gsap3-target-object-not-found/?do=findComment&comment=106192
    gsap.config({
      nullTargetWarn: false,
    });

    ScrollTrigger.refresh();

    let interval;
    if (dimensions.width > 1024) {
      interval = setInterval(() => {
        const date = new Date().toLocaleTimeString("tr-TR");
        setTime(date);
      }, 1000);
    }

    const debounceHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debounceHandleResize);

    if (dimensions.width <= 1024) {
      setSelectedCategory("");
      props.clickedButton("");
      gsap.to(".backdrop", {
        duration: 1,
        opacity: 0,
        display: "none",
        ease: "Expo.easeInOut",
      });
    }
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, [dimensions, props, location]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const content = props.categories.map((category) => (
    <HeaderListItem className="header__item" key={category.name}>
      <Button
        onClick={(event) => {
          setIsDisabled(true);
          setTimeout(() => {
            setIsDisabled(false);
          }, 1000);
          setSelectedCategory(category.name);
          props.clickedButton(event.target);

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

          if (selectedCategory === category.name) {
            event.target.classList.toggle("header__button--active");
            if (!event.target.classList.contains("header__button--active")) {
              props.clickedButton("");
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
          }
        }}
        disabled={isDisabled}
        className={`header__button
        ${
          selectedCategory === category.name && dimensions.width > 1024
            ? "header__button--active"
            : ""
        }`}
      >
        {category.name}
      </Button>
    </HeaderListItem>
  ));
  return (
    <>
      <header
        ref={headerRef}
        className={`header ${
          uiCtx.isLocationChanged === true ? "dark" : "light"
        }`}
      >
        <div className="header__time">
          {locationChanged === true ? (
            <Link to="/">
              <Logo />
            </Link>
          ) : (
            <span>Cape Town {time}</span>
          )}
        </div>
        {dimensions.width > 1024 && (
          <ul className="header__list">
            <HeaderListItem className="header__item">
              <a className="header__link" href="/">
                Launches
              </a>
            </HeaderListItem>
            {content}
            <HeaderListItem className="header__item">
              <a className="header__link" href="/">
                Culture
              </a>
            </HeaderListItem>
            <HeaderListItem className="header__item">
              <a className="header__link" href="/">
                Brands
              </a>
            </HeaderListItem>
          </ul>
        )}
        {dimensions.width > 1024 && <HeaderUser />}
        {dimensions.width < 1025 && <HeaderMobile />}
      </header>
    </>
  );
};

export default Header;

import React, { useRef } from "react";

import Banner from "../components/Banner/Banner";
import Collections from "../components/Collections/Collections";
import Products from "../components/Products/Products";
import ProductsCard from "../components/Products/ProductsCard";
import Culture from "../components/Culture/Culture";
import Footer from "../components/Footer/Footer";

import { ReactComponent as Logo } from "../assets/logo.svg";

import gsap from "gsap";
import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";

const Home = (props) => {
  const cursorRef = useRef();
  const smoothScrollWrapper = useRef();

  const getRefElHandler = (data) => {
    data.addEventListener("mousedown", (e) => {
      cursorRef.current.classList.add("cursor__active");
      gsap.to(".cursor", {
        left: `${e.clientX - 50}`,
        top: `${e.clientY}`,
      });
    });

    data.addEventListener("mouseup", () => {
      cursorRef.current.classList.remove("cursor__active");
    });

    data.addEventListener("mousemove", (e) => {
      gsap.to(".cursor", {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "13rem",
        left: `${e.clientX - 50}`,
        top: `${e.clientY}`,
      });
    });

    data.addEventListener("mouseleave", () => {
      gsap.to(".cursor", {
        display: "none",
      });
      cursorRef.current.classList.remove("cursor__active");
    });
  };

  return (
    <>
      <div className="logo">
        <a href="/">
          <Logo />
        </a>
      </div>
      <SmoothScrollWrapper ref={smoothScrollWrapper} className="homeSmooth">
        <main className="main">
          <Banner />
          <Collections refEl={getRefElHandler} />
          {props.products.map((item) => (
            <Products
              key={item.id}
              refEl={getRefElHandler}
              id={item.id}
              title={item.name}
              items={item.items}
            />
          ))}
          <ProductsCard />
          <Culture />
        </main>
        <Footer />
      </SmoothScrollWrapper>

      <div ref={cursorRef} className="cursor">
        DRAG
      </div>
    </>
  );
};

export default Home;

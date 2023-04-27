import React, { useRef, useState, useEffect } from "react";

import Banner from "../../components/Banner/Banner";
import Collections from "../../components/Collections/Collections";
import Products from "../../components/Products/Products";
import Culture from "../../components/Culture/Culture";
import Footer from "../../components/Footer/Footer";

import HomeLogo from "./homeLogo";

import gsap from "gsap";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";
import { RotatingLines } from "react-loader-spinner";

const Home = ({ products, news }) => {
  // const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cursorRef = useRef();
  const smoothScrollWrapper = useRef();

  // async function getProducts() {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch("http://localhost:5000/product");
  //     if (!res.ok) {
  //       throw Error("Something went wrong");
  //     }
  //     const data = await res.json();
  //     setProducts(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

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
      <HomeLogo />
      <SmoothScrollWrapper ref={smoothScrollWrapper} className="homeSmooth">
        {isLoading === true ? (
          <div className="wrapper">
            <RotatingLines
              className="loading"
              strokeColor="grey"
              strokeWidth="5"
              animationDuration=".75"
              width="96"
              visible={true}
            />
          </div>
        ) : (
          <main className="main">
            <Banner />
            <Collections refEl={getRefElHandler} />
            <Products
              isLoading={isLoading}
              refEl={getRefElHandler}
              title={"Adidas"}
              items={products
                .filter((filtered) => filtered.brand === "Adidas")
                .slice(5, 10)}
            />
            <Products
              isLoading={isLoading}
              refEl={getRefElHandler}
              title={"New Balance"}
              items={products
                .filter((filtered) => filtered.brand === "New Balance")
                .slice(0, 5)}
            />
            <Products
              isLoading={isLoading}
              refEl={getRefElHandler}
              title={"Nike"}
              items={products
                .filter((filtered) => filtered.brand === "Nike")
                .slice(30, 35)}
            />
            <Products
              isLoading={isLoading}
              refEl={getRefElHandler}
              title={"Air Jordan"}
              items={products
                .filter((filtered) => filtered.brand === "Air Jordan")
                .slice(10, 15)}
            />
            <Culture news={news} />
          </main>
        )}
        <Footer />
      </SmoothScrollWrapper>

      {isLoading === false && (
        <div ref={cursorRef} className="cursor">
          DRAG
        </div>
      )}
    </>
  );
};

export default Home;

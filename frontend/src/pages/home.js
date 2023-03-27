import React, { useRef, useState, useEffect } from "react";

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
  const [products, setProducts] = useState([]);
  const [completeFetch, setCompleteFetch] = useState(false);
  const cursorRef = useRef();
  const smoothScrollWrapper = useRef();

  async function getProducts() {
    try {
      setCompleteFetch(true);
      const res = await fetch("http://localhost:5000/product");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setCompleteFetch(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

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
          <Products
            completeFetch={completeFetch}
            refEl={getRefElHandler}
            title={"Adidas"}
            items={products
              .filter((filtered) => filtered.brand === "Adidas")
              .slice(5, 10)}
          />
          <Products
            completeFetch={completeFetch}
            refEl={getRefElHandler}
            title={"New Balance"}
            items={products
              .filter((filtered) => filtered.brand === "New Balance")
              .slice(0, 5)}
          />
          <Products
            completeFetch={completeFetch}
            refEl={getRefElHandler}
            title={"Nike"}
            items={products
              .filter((filtered) => filtered.brand === "Nike")
              .slice(30, 35)}
          />
          <Products
            completeFetch={completeFetch}
            refEl={getRefElHandler}
            title={"Air Jordan"}
            items={products
              .filter((filtered) => filtered.brand === "Air Jordan")
              .slice(10, 15)}
          />
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

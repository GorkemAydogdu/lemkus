import React, { useEffect, useRef } from "react";

import Splide from "@splidejs/splide";

// Default theme
import "@splidejs/splide/css";

//gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductsItem from "./ProductsItem";

gsap.registerPlugin(ScrollTrigger);

const Products = (props) => {
  const productsRef = useRef();
  const titleRef = useRef();

  const mouseEnterHandler = () => {
    props.refEl(productsRef.current);
  };

  useEffect(() => {
    //https://splidejs.com/guides/getting-started/#using-the-global-class
    let prdcGrp = document.getElementsByClassName("products__group");

    for (let i = 0; i < prdcGrp.length; i++) {
      let splide = new Splide(prdcGrp[i], {
        drag: "free",
        perPage: 3,
        speed: 800,
        arrows: false,
        pagination: false,
        breakpoints: {
          1024: {
            perPage: 2,
          },
          500: {
            perPage: 1,
          },
        },
      });
      splide.mount();
    }

    gsap.from(titleRef.current.children, {
      y: "110%",
      opacity: 0,
      stagger: 0.03,
      duration: 0.9,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 75%",
        end: "top 80%",
      },
    });
  }, []);

  return (
    <div className="products">
      <a ref={titleRef} href="/" className="products__title">
        {/*https://stackoverflow.com/a/46223835/19191132*/}
        {props.title.split("").map((text) => (
          <span key={Math.random()}>{text === " " ? "\u00A0" : text}</span>
        ))}
      </a>
      <div
        onMouseEnter={mouseEnterHandler}
        ref={productsRef}
        className="splide products__group"
      >
        <div className="splide__track">
          <ul className="splide__list">
            {props.items.map((item) => (
              <ProductsItem
                key={item.id}
                id={item.id}
                logo={item.logo}
                name={item.name}
                image={item.image}
                sizes={item.sizes}
                price={item.price}
              />
            ))}

            <li className="splide__slide products__item products__viewAll">
              <div className="products__container">
                <a href="/">View All</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;

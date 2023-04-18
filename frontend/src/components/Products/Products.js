import React, { useEffect, useRef } from "react";

import Splide from "@splidejs/splide";

// Default theme
import "@splidejs/splide/css";

//gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductsItem from "./ProductsItem";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Products = (props) => {
  const productsRef = useRef();
  const titleRef = useRef();

  const mouseEnterHandler = () => {
    props.refEl(productsRef.current);
  };

  useEffect(() => {
    let children = gsap.utils.toArray(titleRef.current.children);
    gsap.from(children, {
      y: "110%",
      opacity: 0,
      duration: 0.9,
      skewY: 10,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 75%",
        end: "top 80%",
      },
    });
  }, []);

  useEffect(() => {
    if (props.isLoading === false) {
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
    }
  }, [props]);

  return (
    <div className="products">
      <Link
        ref={titleRef}
        to={`/collections/${props.title.toLowerCase().replace(" ", "-")}`}
        className="products__title"
      >
        <span>{props.title}</span>
        {/* https://stackoverflow.com/a/46223835/19191132
        {props.title.split("").map((text) => (
          <span key={Math.random()}>{text === " " ? "\u00A0" : text}</span>
        ))} */}
      </Link>
      <div
        onMouseEnter={mouseEnterHandler}
        ref={productsRef}
        className="splide products__group"
      >
        <div className="splide__track">
          <ul className="splide__list">
            {props.items !== [] &&
              props.items.map((item) => (
                <ProductsItem
                  className="splide__slide products__item"
                  key={item._id}
                  id={item._id}
                  logo={item.logo}
                  name={item.name}
                  images={item.images.slice(0, 2)}
                  sizes={item.sizes}
                  price={item.price}
                  brand={item.brand}
                />
              ))}
            <li className="splide__slide products__item products__viewAll">
              <div className="products__container">
                <Link
                  to={`/collections/${props.title
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  View All
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;

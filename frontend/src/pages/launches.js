import React, { useRef, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Splide from "@splidejs/splide";

// Default theme
import "@splidejs/splide/css";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
// import ProductsCardAlternative from "../components/Products/ProductsCardAlternative";
import Culture from "../components/Culture/Culture";
import Footer from "../components/Footer/Footer";

const Launches = (props) => {
  const smoothScrollWrapper = useRef();
  const [product, setProduct] = useState([]);
  const [completeFetch, setCompleteFetch] = useState(false);

  async function getProduct() {
    try {
      setCompleteFetch(true);
      const res = await fetch("http://localhost:5000/product");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setCompleteFetch(false);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    if (completeFetch !== true) {
      let splide = new Splide(".launches__group", {
        drag: "free",
        perPage: 1,
        speed: 800,
        arrows: false,
        pagination: false,
      });
      splide.mount();
    }
  }, [completeFetch]);
  return (
    <SmoothScrollWrapper className="pageSmooth" ref={smoothScrollWrapper}>
      <div className="launches">
        <div className="launches__header">
          <h1 className="launches__title">
            LAUNCHES LAUNCHES LAUNCHES LAUNCHES LAUNCHES
          </h1>
          <div className="splide launches__group">
            <div className="splide__track">
              <ul className="splide__list launches__list launches__list--variant">
                {/* https://stackoverflow.com/a/42374933/19191132 */}
                {product
                  .filter((filtered) => filtered.categoryName === "Launches")
                  .slice(0, 5)
                  .map((item) => (
                    <li
                      key={item._id}
                      className="splide__slide launches__item launches__item--variant"
                    >
                      <div className="products__container">
                        <Link
                          to={`/products/${item.name
                            .toLowerCase()
                            .replaceAll(/[^a-zA-Z0-9]/g, "-")
                            .replace(/-{2,}/g, "-")
                            .replace(/-$/, "")}?id=${item._id}`}
                          className="products__image"
                        >
                          <div className="products__logo">
                            <img src={item.logo} alt={item.name} />
                          </div>
                          {item.images.slice(0, 2).map((img) => (
                            <img
                              key={img.id}
                              className={`products__image--${img.id}`}
                              src={img.url}
                              alt={props.name}
                            />
                          ))}
                        </Link>

                        <div className="products__infos">
                          <div className="products__container--size">
                            {item.sizes.map((size) => (
                              <Link
                                to={`/products/${item.name
                                  .toLowerCase()
                                  .replaceAll(/[^a-zA-Z0-9]/g, "-")
                                  .replace(/-{2,}/g, "-")
                                  .replace(/-$/, "")}?id=${
                                  item._id
                                }&size=${size}`}
                                key={size}
                              >
                                {size}
                              </Link>
                            ))}
                          </div>
                          <Link
                            to={`/products/${item.name
                              .toLowerCase()
                              .replaceAll(/[^a-zA-Z0-9]/g, "-")
                              .replace(/-{2,}/g, "-")
                              .replace(/-$/, "")}?id=${item._id}`}
                            className="products__container--title"
                          >
                            {item.name}
                          </Link>
                          <span className="products__container--price">
                            R {item.price}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <ul className="launches__list launches__list--all">
          {product
            .filter((filtered) => filtered.categoryName === "Launches")
            .map((item) => (
              <li key={item._id} className="launches__item launches__item--all">
                <div className="products__container">
                  <Link
                    to={`/products/${item.name
                      .toLowerCase()
                      .replaceAll(/[^a-zA-Z0-9]/g, "-")
                      .replace(/-{2,}/g, "-")
                      .replace(/-$/, "")}?id=${item._id}`}
                    className="products__image"
                  >
                    <div className="products__logo">
                      <img src={item.logo} alt={item.name} />
                    </div>
                    {item.images.slice(0, 2).map((img) => (
                      <img
                        key={img.id}
                        className={`products__image--${img.id}`}
                        src={img.url}
                        alt={props.name}
                      />
                    ))}
                  </Link>

                  <div className="products__infos">
                    <div className="products__container--size">
                      {item.sizes.map((size) => (
                        <Link
                          to={`/products/${item.name
                            .toLowerCase()
                            .replaceAll(/[^a-zA-Z0-9]/g, "-")
                            .replace(/-{2,}/g, "-")
                            .replace(/-$/, "")}?id=${item._id}&size=${size}`}
                          key={size}
                        >
                          {size}
                        </Link>
                      ))}
                    </div>
                    <Link
                      to={`/products/${item.name
                        .toLowerCase()
                        .replaceAll(/[^a-zA-Z0-9]/g, "-")
                        .replace(/-{2,}/g, "-")
                        .replace(/-$/, "")}?id=${item._id}`}
                      className="products__container--title"
                    >
                      {item.name}
                    </Link>
                    <span className="products__container--price">
                      {item.price}
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <Culture />
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Launches;

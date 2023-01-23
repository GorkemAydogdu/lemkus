import React, { useRef, useEffect } from "react";

import Splide from "@splidejs/splide";

// Default theme
import "@splidejs/splide/css";

import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import ProductsCard from "../components/Products/ProductsCard";
import Footer from "../components/Footer/Footer";

const Launches = (props) => {
  const smoothScrollWrapper = useRef();

  useEffect(() => {
    let splide = new Splide(".launches__group", {
      drag: "free",
      perPage: 2,
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
  }, []);
  return (
    <SmoothScrollWrapper className="pageSmooth" ref={smoothScrollWrapper}>
      <div className="launches">
        <div className="launches__header">
          <h1 className="launches__title">
            LAUNCHES LAUNCHES LAUNCHES LAUNCHES LAUNCHES
          </h1>
          <div className="splide launches__group">
            <div className="splide__track">
              <ul className="splide__list launches__list">
                {/* https://stackoverflow.com/a/42374933/19191132 */}
                {props.launches.slice(0, 5).map((item) => (
                  <li key={item.id} className="splide__slide launches__item">
                    <div className="products__container">
                      <a href="/" className="products__image">
                        <div className="products__logo">
                          <img key={item.id} src={item.logo} alt={item.name} />
                        </div>
                        {item.image.map((img) => (
                          <img
                            key={img.id}
                            className={`products__image--${img.id}`}
                            src={img.url}
                            alt={props.name}
                          />
                        ))}
                      </a>

                      <div className="products__infos">
                        <div className="products__container--size">
                          {item.sizes.map((size) => (
                            <a key={size} href="/">
                              {size}
                            </a>
                          ))}
                        </div>
                        <a href="/" className="products__container--title">
                          {item.name}
                        </a>
                        <span className="products__container--price">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ProductsCard />
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Launches;

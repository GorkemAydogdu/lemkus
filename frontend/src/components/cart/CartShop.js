import React, { useEffect, useState, useCallback } from "react";

import CartShopItem from "./CartShopItem";

//Splidejs
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";

const CartShop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchDataHandler = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/product");
      const data = await res.json();
      setData(
        data.filter((filtered) => filtered.categoryName === "Accessories")
      );
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  useEffect(() => {
    if (loading !== true) {
      let splide = new Splide(".cart__shop--group", {
        height: "auto",
        direction: "ttb",
        drag: false,
        speed: 800,
        arrows: false,
        pagination: false,
        breakpoints: {
          1024: {
            drag: "free",
            direction: "ltr",
            perPage: 2,
          },
          500: {
            perPage: 1,
          },
        },
      });

      splide.mount();
    }
  }, []);
  return (
    <div className="cart__shop">
      <span className="cart__shop--header">ANYTHING ELSE?</span>
      <div className="splide cart__shop--group">
        <div className="splide__track">
          <ul className="splide__list cart__shop--list">
            {data !== [] &&
              data.map((item) => (
                <CartShopItem
                  key={item._id}
                  image={item.image}
                  logo={item.logo}
                  name={item.name}
                  price={item.price}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartShop;

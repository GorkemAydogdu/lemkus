import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";

const Brands = (props) => {
  const [brand, setBrand] = useState([]);
  const smoothScrollWrapper = useRef();

  async function getBrands() {
    try {
      const res = await fetch("http://localhost:5000/brands");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setBrand(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="brands">
        <h1 className="brands__title">BRANDS</h1>
        <div className="brands__container">
          {brand.map((item) => (
            <div className="brands__item">
              <b>{item.letter}</b>
              {item.brand.map((brand) => (
                <Link
                  target="_blank"
                  to={`/collections/${brand
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  {brand}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Brands;

import React, { useRef } from "react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";

const Brands = (props) => {
  const smoothScrollWrapper = useRef();

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="brands">
        <h1 className="brands__title">BRANDS</h1>
        <div className="brands__container">
          {props.data.map((item) => (
            <div className="brands__item">
              <b>{item.letter}</b>
              {item.brand.map((brand) => (
                <Link
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

import React, { useRef } from "react";

import BrandItem from "./brandItem";
import Footer from "../../components/Footer/Footer";
import SmoothScrollWrapper from "../../components/UI/SmoothScrollWrapper";

const Brands = () => {
  const smoothScrollWrapper = useRef();

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="brands">
        <h1 className="brands__title">BRANDS</h1>
        <div className="brands__container">
          <BrandItem />
        </div>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Brands;

import React, { useEffect } from "react";

import LaunchesListVariant from "./launchesListVariant";

import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

const LaunchesHeader = ({ product }) => {
  useEffect(() => {
    if (product !== []) {
      let splide = new Splide(".launches__group", {
        drag: "free",
        perPage: 1,
        speed: 800,
        arrows: false,
        pagination: false,
      });
      splide.mount();
    }
  }, [product]);

  return (
    <div className="launches__header">
      <h1 className="launches__title">
        LAUNCHES LAUNCHES LAUNCHES LAUNCHES LAUNCHES
      </h1>
      <div className="splide launches__group">
        <div className="splide__track">
          <LaunchesListVariant product={product} />
        </div>
      </div>
    </div>
  );
};

export default LaunchesHeader;

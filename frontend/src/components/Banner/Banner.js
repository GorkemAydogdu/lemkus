import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <Link
        to={`/products/2002r-lifestyle?id=643fe0d7ddffb915f649f7d2`}
        className="banner__link"
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0538/9280/8895/files/2002R_Lemkus_Hero_Image_2636x1092_f4e658d1-9bf6-451d-a7c0-4a77c6f082b5.jpg?v=1681889396"
          className="banner__image"
          alt="New Balance 2002R"
        />
      </Link>
    </div>
  );
};

export default Banner;

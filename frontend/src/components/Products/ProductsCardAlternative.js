import React from "react";
import { Link } from "react-router-dom";

const ProductsCardAlternative = ({ name, logo, image, price }) => {
  return (
    <div className="products-card products-card__alternative">
      <div className="products-card__left products-card__width65">
        <Link
          to={`/products/${name
            .toLowerCase()
            .replaceAll(/[^a-zA-Z0-9]/g, "-")
            .replace(/-{2,}/g, "-")
            .replace(/-$/, "")}`}
          className="products-card__link"
        >
          <img src={image.url} alt={name} />
        </Link>
      </div>
      <div className="products-card__right products-card__width35">
        <img className="products-card__logo" src={logo} alt={name} />
        <Link
          to={`/products/${name
            .toLowerCase()
            .replaceAll(/[^a-zA-Z0-9]/g, "-")
            .replace(/-{2,}/g, "-")
            .replace(/-$/, "")}`}
          className="products-card__title"
        >
          {name}
        </Link>
        <span className="products-card__price">{price}</span>
      </div>
    </div>
  );
};

export default ProductsCardAlternative;

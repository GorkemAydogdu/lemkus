import React from "react";

const ProductsCardAlternative = ({ name, logo, image, price }) => {
  return (
    <div className="products-card products-card__alternative">
      <div className="products-card__left products-card__width65">
        <a className="products-card__link" href="/">
          <img src={image.url} alt={name} />
        </a>
      </div>
      <div className="products-card__right products-card__width35">
        <img className="products-card__logo" src={logo} alt={name} />
        <a href="/" className="products-card__title">
          {name}
        </a>
        <span className="products-card__price">{price}</span>
      </div>
    </div>
  );
};

export default ProductsCardAlternative;

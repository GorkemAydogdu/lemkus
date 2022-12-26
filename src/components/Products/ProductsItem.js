import React from "react";

const ProductsItem = (props) => {
  return (
    <li className="splide__slide products__item">
      <div className="products__container">
        <a href="/" className="products__image">
          <div className="products__logo">
            <img key={props.id} src={props.logo} alt={props.name} />
          </div>
          {props.image.map((img) => (
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
            {props.sizes.map((size) => (
              <a key={size} href="/">
                {size}
              </a>
            ))}
          </div>
          <a href="/" className="products__container--title">
            {props.name}
          </a>
          <span className="products__container--price">{props.price}</span>
        </div>
      </div>
    </li>
  );
};

export default ProductsItem;
